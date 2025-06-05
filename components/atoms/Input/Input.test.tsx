import { render, screen, fireEvent } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('renders input with placeholder', () => {
    render(<Input placeholder="Enter text" />)
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument()
  })

  it('renders with different sizes', () => {
    const { rerender } = render(<Input size="sm" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()

    rerender(<Input size="md" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()

    rerender(<Input size="lg" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('renders with prefix and suffix', () => {
    render(
      <Input
        prefix="$"
        suffix=".00"
      />
    )
    expect(screen.getByText('$')).toBeInTheDocument()
    expect(screen.getByText('.00')).toBeInTheDocument()
  })

  it('calls onChange when typed', () => {
    const onChange = jest.fn()
    render(<Input placeholder="Type..." onChange={onChange} />)
    fireEvent.change(screen.getByPlaceholderText('Type...'), {
      target: { value: 'Hello' },
    })
    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it('is disabled', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeDisabled()
  })
})
