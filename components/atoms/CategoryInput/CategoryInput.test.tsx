import { render, screen, fireEvent } from '@testing-library/react';
import CategoryInput from './CategoryInput';
import { FaHome } from 'react-icons/fa';

describe('CategoryInput Component', () => {
  const mockOnClick = jest.fn();

  it('renders with icon and label', () => {
    render(<CategoryInput icon={FaHome} label="Home" onClick={mockOnClick} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByTestId('category-icon')).toBeInTheDocument();
  });

  it('handles click events', () => {
    render(<CategoryInput icon={FaHome} label="Home" onClick={mockOnClick} />);
    fireEvent.click(screen.getByText('Home'));
    expect(mockOnClick).toHaveBeenCalledWith('Home');
  });

  it('applies selected styles when selected', () => {
    render(<CategoryInput icon={FaHome} label="Home" selected onClick={mockOnClick} />);
    const container = screen.getByTestId('category-container');
    expect(container).toHaveClass('border-black');
  });

  it('applies default styles when not selected', () => {
    render(<CategoryInput icon={FaHome} label="Home" onClick={mockOnClick} />);
    const container = screen.getByTestId('category-container');
    expect(container).not.toHaveClass('border-black');
  });
});
