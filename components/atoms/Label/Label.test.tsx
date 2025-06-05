import { render, screen } from '@testing-library/react'
import { Label } from './Label'

test('renders label with text', () => {
  render(<Label>Email</Label>)
  expect(screen.getByText('Email')).toBeInTheDocument()
})
