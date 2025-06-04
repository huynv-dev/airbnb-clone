import { render, screen, fireEvent } from '@testing-library/react';
import Logo from './Logo';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: mockPush,
    };
  },
}));

describe('Logo Component', () => {
  it('renders logo image', () => {
    render(<Logo />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/images/logo.png');
    expect(image).toHaveAttribute('alt', 'Logo');
  });

  it('navigates to home on click', () => {
    render(<Logo />);
    const image = screen.getByRole('img');
    fireEvent.click(image);
    expect(mockPush).toHaveBeenCalledWith('/');
  });

  it('applies correct styles', () => {
    render(<Logo />);
    const image = screen.getByRole('img');
    expect(image).toHaveClass('hidden', 'md:block', 'cursor-pointer');
  });
});
