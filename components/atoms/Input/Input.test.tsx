import { render, screen } from '@testing-library/react';
import Input from './Input';
import { useForm } from 'react-hook-form';

const TestComponent = ({
  id = 'test',
  label = 'Test Label',
  type = 'text',
  disabled = false,
  formatPrice = false,
  required = false,
}) => {
  const { register, formState: { errors } } = useForm();
  return (
    <Input
      id={id}
      label={label}
      type={type}
      disabled={disabled}
      formatPrice={formatPrice}
      required={required}
      register={register}
      errors={errors}
    />
  );
};


describe('Input Component', () => {
  it('renders input with label', () => {
    render(<TestComponent />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('renders in disabled state', () => {
    render(<TestComponent disabled />);
    expect(screen.getByRole('textbox')).toBeDisabled();
  });

  it('renders with price format', () => {
    render(<TestComponent formatPrice />);
    expect(screen.getByTestId('price-icon')).toBeInTheDocument();
  });

  it('renders with different input type', () => {
    render(<TestComponent type="password" />);
    expect(screen.getByRole('textbox')).toHaveAttribute('type', 'password');
  });

  it('applies error styles when there are errors', () => {
    render(<TestComponent />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('border-rose-500');
  });
}); 