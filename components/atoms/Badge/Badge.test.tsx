import { render, screen } from '@testing-library/react'
import { Badge } from './Badge'

test('renders badge with text', () => {
  render(<Badge>Test</Badge>)
  expect(screen.getByText('Test')).toBeInTheDocument()
})
