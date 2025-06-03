import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Button';
import { FcGoogle } from 'react-icons/fc';

describe('Button Component', () => {
  const mockOnClick = jest.fn();

  it('renders button with label', () => {
    render(<Button label="Test Button" onClick={mockOnClick} />);
    expect(screen.getByText('Test Button')).toBeInTheDocument();
  });

  it('handles click events', () => {
    render(<Button label="Click Me" onClick={mockOnClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('renders in disabled state', () => {
    render(<Button label="Disabled" onClick={mockOnClick} disabled />);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('renders with icon', () => {
    render(<Button label="With Icon" onClick={mockOnClick} icon={FcGoogle} />);
    expect(screen.getByRole('button').querySelector('svg')).toBeInTheDocument();
  });

  it('applies outline styles when outline prop is true', () => {
    render(<Button label="Outline" onClick={mockOnClick} outline />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('bg-white');
    expect(button).toHaveClass('border-black');
    expect(button).toHaveClass('text-black');
  });

  it('applies small styles when small prop is true', () => {
    render(<Button label="Small" onClick={mockOnClick} small />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('py-1');
    expect(button).toHaveClass('text-sm');
    expect(button).toHaveClass('font-light');
    expect(button).toHaveClass('border-[1px]');
  });
}); 