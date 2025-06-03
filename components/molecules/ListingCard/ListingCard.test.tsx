import { render, screen, fireEvent } from '@testing-library/react';
import ListingCard from './ListingCard';

// Mock the next/navigation router
const mockRouter = {
  push: jest.fn(),
};

jest.mock('next/navigation', () => ({
  useRouter() {
    return mockRouter;
  },
}));

// Mock the HeartButton component
jest.mock('../HeartButton', () => {
  return function MockHeartButton() {
    return <div data-testid="heart-button">Heart Button</div>;
  };
});

describe('ListingCard Component', () => {
  const mockData = {
    id: '1',
    title: 'Test Listing',
    imageSrc: '/test-image.jpg',
    locationValue: 'Test Location',
    price: 100,
    category: 'Test Category',
  };

  const mockReservation = {
    id: '1',
    userId: '1',
    listingId: '1',
    startDate: '2023-01-01',
    endDate: '2023-01-05',
    totalPrice: 500,
    createdAt: '2023-01-01',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders listing information', () => {
    render(<ListingCard data={mockData} />);
    expect(screen.getByTestId('listing-image')).toBeInTheDocument();
    expect(screen.getByText('Test Location')).toBeInTheDocument();
    expect(screen.getByText('Test Category')).toBeInTheDocument();
    expect(screen.getByText('$ 100')).toBeInTheDocument();
  });

  it('navigates to listing page on click', () => {
    render(<ListingCard data={mockData} />);
    fireEvent.click(screen.getByTestId('listing-card'));
    expect(mockRouter.push).toHaveBeenCalledWith('/listings/1');
  });

  it('renders reservation dates when provided', () => {
    render(<ListingCard data={mockData} reservation={mockReservation} />);
    expect(screen.getByText(/January 1st, 2023 - January 5th, 2023/)).toBeInTheDocument();
  });

  it('renders action button when provided', () => {
    const mockAction = jest.fn();
    render(
      <ListingCard
        data={mockData}
        onAction={mockAction}
        actionLabel="Test Action"
        actionId="123"
      />
    );
    const button = screen.getByText('Test Action');
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(mockAction).toHaveBeenCalledWith('123');
  });

  it('does not call action when disabled', () => {
    const mockAction = jest.fn();
    render(
      <ListingCard
        data={mockData}
        onAction={mockAction}
        actionLabel="Test Action"
        actionId="123"
        disabled
      />
    );
    const button = screen.getByText('Test Action');
    fireEvent.click(button);
    expect(mockAction).not.toHaveBeenCalled();
  });
}); 