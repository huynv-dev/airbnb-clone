import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import axios from 'axios';
import RentModal from './RentModal';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

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
const mockRentModal = {
  isOpen: true,
  onClose: jest.fn(),
};

jest.mock('@/hooks/useRentModal', () => ({
  __esModule: true,
  default: () => mockRentModal,
}));

// Mock Map component
jest.mock('@/components/atoms/Map', () => {
  return function DummyMap() {
    return <div data-testid="map">Map Component</div>;
  };
});

describe('RentModal Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders initial category step', () => {
    render(<RentModal />);
    expect(screen.getByText('Which of these best describes your place?')).toBeInTheDocument();
    expect(screen.getByText('Pick a category')).toBeInTheDocument();
  });

  it('navigates through steps', async () => {
    render(<RentModal />);

    // Start at Category step
    expect(screen.getByText('Which of these best describes your place?')).toBeInTheDocument();

    // Move to Location step
    fireEvent.click(screen.getByText('Next'));
    await waitFor(() => {
      expect(screen.getByText('Where is your place located?')).toBeInTheDocument();
    });

    // Move to Info step
    fireEvent.click(screen.getByText('Next'));
    await waitFor(() => {
      expect(screen.getByText('Share some basics about your place')).toBeInTheDocument();
    });

    // Move back to Location step
    fireEvent.click(screen.getByText('Back'));
    await waitFor(() => {
      expect(screen.getByText('Where is your place located?')).toBeInTheDocument();
    });
  });

  it('handles form submission', async () => {
    mockedAxios.post.mockResolvedValueOnce({});

    render(<RentModal />);

    // Navigate through all steps
    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText('Next'));
    }

    // At Price step
    expect(screen.getByText('Now, set your price')).toBeInTheDocument();

    // Fill in price
    fireEvent.change(screen.getByLabelText('Price'), {
      target: { value: '100' },
    });

    // Submit form
    fireEvent.click(screen.getByText('Create'));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalledWith('/api/listings', expect.any(Object));
      expect(mockRouter.refresh).toHaveBeenCalled();
      expect(mockRentModal.onClose).toHaveBeenCalled();
    });
  });

  it('handles submission error', async () => {
    mockedAxios.post.mockRejectedValueOnce(new Error('Submission failed'));

    render(<RentModal />);

    // Navigate to Price step
    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText('Next'));
    }

    fireEvent.click(screen.getByText('Create'));

    await waitFor(() => {
      expect(mockedAxios.post).toHaveBeenCalled();
      // Toast error message would be shown here
    });
  });

  it('disables form submission while loading', async () => {
    mockedAxios.post.mockImplementationOnce(() => new Promise(() => {})); // Never resolves

    render(<RentModal />);

    // Navigate to Price step
    for (let i = 0; i < 5; i++) {
      fireEvent.click(screen.getByText('Next'));
    }

    fireEvent.click(screen.getByText('Create'));

    await waitFor(() => {
      expect(screen.getByText('Create')).toBeDisabled();
    });
  });
});
