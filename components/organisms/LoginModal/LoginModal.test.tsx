import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginModal from './LoginModal';
import { signIn } from 'next-auth/react';

// Mock next-auth
jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

// Mock next/navigation
const mockRouter = {
  refresh: jest.fn(),
};

jest.mock('next/navigation', () => ({
  useRouter() {
    return mockRouter;
  },
}));

// Mock custom hooks
const mockLoginModal = {
  isOpen: true,
  onClose: jest.fn(),
};

const mockRegisterModal = {
  onOpen: jest.fn(),
};

jest.mock('@/hooks/useLoginModal', () => ({
  __esModule: true,
  default: () => mockLoginModal,
}));

jest.mock('@/hooks/useRegisterModal', () => ({
  __esModule: true,
  default: () => mockRegisterModal,
}));

describe('LoginModal Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders login form elements', () => {
    render(<LoginModal />);
    expect(screen.getByText('Welcome back')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByText('Continue with Google')).toBeInTheDocument();
    expect(screen.getByText('Continue with Github')).toBeInTheDocument();
  });

  it('handles form submission', async () => {
    (signIn as jest.Mock).mockResolvedValueOnce({ ok: true });

    render(<LoginModal />);
    
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password123' },
    });
    
    fireEvent.click(screen.getByText('Continue'));

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'test@example.com',
        password: 'password123',
        redirect: false,
      });
    });
  });

  it('handles social login', async () => {
    render(<LoginModal />);
    
    fireEvent.click(screen.getByText('Continue with Google'));
    expect(signIn).toHaveBeenCalledWith('google');

    fireEvent.click(screen.getByText('Continue with Github'));
    expect(signIn).toHaveBeenCalledWith('github');
  });

  it('toggles between login and register modals', () => {
    render(<LoginModal />);
    
    fireEvent.click(screen.getByText('Create an account'));
    
    expect(mockLoginModal.onClose).toHaveBeenCalled();
    expect(mockRegisterModal.onOpen).toHaveBeenCalled();
  });

  it('handles login errors', async () => {
    (signIn as jest.Mock).mockResolvedValueOnce({
      error: 'Invalid credentials',
    });

    render(<LoginModal />);
    
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'wrong-password' },
    });
    
    fireEvent.click(screen.getByText('Continue'));

    await waitFor(() => {
      expect(signIn).toHaveBeenCalled();
      // Toast error message would be shown here
    });
  });
}); 