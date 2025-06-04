import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import { signIn } from 'next-auth/react';
import RegisterModal from './RegisterModal';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

// Mock next-auth
jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

// Mock custom hooks
const mockRegisterModal = {
  isOpen: true,
  onClose: jest.fn(),
};

const mockLoginModal = {
  onOpen: jest.fn(),
};

jest.mock('@/hooks/useRegisterModal', () => ({
  __esModule: true,
  default: () => mockRegisterModal,
}));

jest.mock('@/hooks/useLoginModal', () => ({
  __esModule: true,
  default: () => mockLoginModal,
}));

describe('RegisterModal Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders registration form elements', () => {
    render(<RegisterModal />);
    expect(screen.getByText('Welcome to Airbnb')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Continue with Google')).toBeInTheDocument();
    expect(screen.getByText('Continue with Github')).toBeInTheDocument();
  });

  it('handles form submission successfully', async () => {
    mockedAxios.post.mockResolvedValueOnce({});

    render(<RegisterModal />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText('Continue'));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith('/api/register', {
        email: 'test@example.com',
        name: 'Test User',
        password: 'password123',
      });
      expect(mockRegisterModal.onClose).toHaveBeenCalled();
      expect(mockLoginModal.onOpen).toHaveBeenCalled();
    });
  });

  it('handles form submission error', async () => {
    const errorMessage = 'Registration failed';
    mockedAxios.post.mockRejectedValueOnce({ message: errorMessage });

    render(<RegisterModal />);

    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Name'), {
      target: { value: 'Test User' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByText('Continue'));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalled();
      // Toast error message would be shown here
    });
  });

  it('handles social registration', () => {
    render(<RegisterModal />);

    fireEvent.click(screen.getByText('Continue with Google'));
    expect(signIn).toHaveBeenCalledWith('google');

    fireEvent.click(screen.getByText('Continue with Github'));
    expect(signIn).toHaveBeenCalledWith('github');
  });

  it('toggles between register and login modals', () => {
    render(<RegisterModal />);

    fireEvent.click(screen.getByText('Log in'));

    expect(mockRegisterModal.onClose).toHaveBeenCalled();
    expect(mockLoginModal.onOpen).toHaveBeenCalled();
  });
});
