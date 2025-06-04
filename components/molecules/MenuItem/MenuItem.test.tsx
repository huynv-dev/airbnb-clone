import { render, screen, fireEvent } from '@testing-library/react';
import MenuItem from './MenuItem';

describe('MenuItem Component', () => {
  const mockOnClick = jest.fn();

  it('renders with label', () => {
    render(<MenuItem onClick={mockOnClick} label="Test Item" />);
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });

  it('handles click events', () => {
    render(<MenuItem onClick={mockOnClick} label="Click Me" />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('applies correct styles', () => {
    render(<MenuItem onClick={mockOnClick} label="Styled Item" />);
    const menuItem = screen.getByText('Styled Item');
    expect(menuItem).toHaveClass(
      'px-4',
      'py-3',
      'hover:bg-neutral-100',
      'transition',
      'font-semibold',
      'cursor-pointer',
    );
  });
});
