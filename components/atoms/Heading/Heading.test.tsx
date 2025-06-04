import { render, screen } from '@testing-library/react';
import Heading from './Heading';

describe('Heading Component', () => {
  it('renders title', () => {
    render(<Heading title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<Heading title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('applies center alignment when center prop is true', () => {
    render(<Heading title="Test Title" center />);
    const container = screen.getByText('Test Title').parentElement;
    expect(container).toHaveClass('text-center');
  });

  it('applies start alignment by default', () => {
    render(<Heading title="Test Title" />);
    const container = screen.getByText('Test Title').parentElement;
    expect(container).toHaveClass('text-start');
  });
});
