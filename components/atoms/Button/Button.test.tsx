import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'
import { ReactElement } from 'react'

const TestIcon = (): ReactElement => (
  <svg data-testid="test-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2L4 12l8 10 8-10z" />
  </svg>
)

describe('Button Component', () => {
  // Basic rendering tests
  it('renders with text content', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent('Click me')
  })

  it('renders with default props when none are provided', () => {
    render(<Button>Default</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('rounded-xl')
    expect(button).toHaveClass('gradientButton')
    expect(button).not.toBeDisabled()
  })

  // Interaction tests
  it('calls onClick handler when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    fireEvent.click(screen.getByText('Clickable'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn()
    render(
      <Button disabled onClick={handleClick}>
        Disabled
      </Button>
    )
    fireEvent.click(screen.getByText('Disabled'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  // State tests
  it('renders loading state with spinner', () => {
    render(<Button loading>Loading</Button>)
    expect(screen.getByRole('button')).toHaveClass('opacity-70')
    expect(screen.getByRole('button')).toHaveClass('cursor-wait')
    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument()
  })

  it('renders disabled state correctly', () => {
    render(<Button disabled>Disabled</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:opacity-50')
    expect(button).toHaveClass('disabled:cursor-not-allowed')
  })

  // Icon tests
  it('renders icon at start position by default', () => {
    render(<Button icon={<TestIcon />}>With Icon</Button>)
    const button = screen.getByRole('button')
    const icon = screen.getByTestId('test-icon')
    expect(button).toContainElement(icon)
    expect(button).toHaveTextContent('With Icon')
    expect(icon.nextSibling).toHaveTextContent('With Icon')
  })

  it('renders icon at end position when specified', () => {
    render(
      <Button icon={<TestIcon />} iconPosition="end">
        With Icon
      </Button>
    )
    const button = screen.getByRole('button')
    const icon = screen.getByTestId('test-icon')
    expect(button.firstChild).toHaveTextContent('With Icon')
    expect(icon.previousSibling).toHaveTextContent('With Icon')
  })

  it('renders as icon-only button when no children provided', () => {
    render(<Button icon={<TestIcon />} />)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('rounded-full')
    expect(button).toHaveClass('p-0')
    expect(button).toContainElement(screen.getByTestId('test-icon'))

  })

  // Style variant tests
  it('applies correct styles for primary type', () => {
    render(<Button type="primary">Primary</Button>)
    expect(screen.getByRole('button')).toHaveClass('gradientButton')
  })

  it('applies correct styles for outline type', () => {
    render(<Button type="outline">Outline</Button>)
    expect(screen.getByRole('button')).toHaveClass('border')
    expect(screen.getByRole('button')).toHaveClass('bg-transparent')
  })

  // Size tests
  it('applies correct styles for small size', () => {
    render(<Button size="sm">Small</Button>)
    expect(screen.getByRole('button')).toHaveClass('py-2')
    expect(screen.getByRole('button')).toHaveClass('px-4')
    expect(screen.getByRole('button')).toHaveClass('text-sm')
  })

  it('applies correct styles for large size', () => {
    render(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('py-3')
    expect(screen.getByRole('button')).toHaveClass('px-6')
    expect(screen.getByRole('button')).toHaveClass('text-lg')
  })

  // Color tests
  it('applies correct color styles', () => {
    render(<Button color="danger">Danger</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-red-500')
  })

  // Custom class test
  it('merges custom className with base styles', () => {
    render(<Button className="custom-class">Test</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('custom-class')
    expect(button).toHaveClass('rounded-xl') // Base class still applied
  })
})