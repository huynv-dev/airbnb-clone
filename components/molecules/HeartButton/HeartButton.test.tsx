import { render, screen, fireEvent } from '@testing-library/react';
import HeartButton from './HeartButton';

// Mock the useFavorite hook
jest.mock('@/hooks/useFavorite', () => ({
  __esModule: true,
  default: jest.fn(({ listingId, currentUser }) => ({
    hasFavorited: false,
    toggleFavorite: jest.fn(),
  })),
}));

describe('HeartButton Component', () => {
  const mockListingId = '123';
  const mockCurrentUser = { id: '1', email: 'test@test.com' };

  it('renders heart icons', () => {
    render(<HeartButton listingId={mockListingId} currentUser={mockCurrentUser} />);
    expect(screen.getByTestId('outline-heart')).toBeInTheDocument();
    expect(screen.getByTestId('fill-heart')).toBeInTheDocument();
  });

  it('handles click events', () => {
    const useFavorite = require('@/hooks/useFavorite').default;
    const mockToggleFavorite = jest.fn();
    useFavorite.mockImplementation(() => ({
      hasFavorited: false,
      toggleFavorite: mockToggleFavorite,
    }));

    render(<HeartButton listingId={mockListingId} currentUser={mockCurrentUser} />);
    fireEvent.click(screen.getByTestId('heart-button'));
    expect(mockToggleFavorite).toHaveBeenCalled();
  });

  it('applies active styles when favorited', () => {
    const useFavorite = require('@/hooks/useFavorite').default;
    useFavorite.mockImplementation(() => ({
      hasFavorited: true,
      toggleFavorite: jest.fn(),
    }));

    render(<HeartButton listingId={mockListingId} currentUser={mockCurrentUser} />);
    expect(screen.getByTestId('fill-heart')).toHaveClass('fill-rose-500');
  });

  it('applies inactive styles when not favorited', () => {
    const useFavorite = require('@/hooks/useFavorite').default;
    useFavorite.mockImplementation(() => ({
      hasFavorited: false,
      toggleFavorite: jest.fn(),
    }));

    render(<HeartButton listingId={mockListingId} currentUser={mockCurrentUser} />);
    expect(screen.getByTestId('fill-heart')).toHaveClass('fill-neutral-500/70');
  });
}); 