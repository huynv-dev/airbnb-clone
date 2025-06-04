import { render, screen } from '@testing-library/react';
import Avatar from './Avatar';

describe('Avatar Component', () => {
  it('renders with provided src', () => {
    render(<Avatar src="/test-image.jpg" />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src');
    expect(image).toHaveAttribute('alt', 'Avatar');
  });

  it('renders with placeholder when src is null', () => {
    render(<Avatar src={null} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/images/placeholder.jpg');
  });

  it('renders with placeholder when src is undefined', () => {
    render(<Avatar src={undefined} />);
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', '/images/placeholder.jpg');
  });

  it('applies rounded style', () => {
    render(<Avatar src="/test-image.jpg" />);
    const image = screen.getByRole('img');
    expect(image).toHaveClass('rounded-full');
  });
});
