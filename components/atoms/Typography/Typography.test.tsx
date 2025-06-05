import { render, screen, fireEvent } from '@testing-library/react';
import { Typography } from './Typography';
import '@testing-library/jest-dom';

describe('Typography', () => {
  it('renders correct heading tag when variant is title and level is 3', () => {
    render(<Typography variant="title" level={3}>Heading Level 3</Typography>);
    const heading = screen.getByText('Heading Level 3');
    expect(heading.tagName).toBe('H3');
  });

  it('applies code class when variant is code', () => {
    render(<Typography variant="code">Code Snippet</Typography>);
    const el = screen.getByText('Code Snippet');
    expect(el.className).toMatch(/code/);
  });



  it('renders with children', () => {
    render(<Typography>Test Text</Typography>);
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  it('calls onClick if provided', () => {
    const handleClick = jest.fn();
    render(<Typography onClick={handleClick}>Clickable</Typography>);
    fireEvent.click(screen.getByText('Clickable'));
    expect(handleClick).toHaveBeenCalled();
  });

  it('does not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(
      <Typography onClick={handleClick} disabled>
        Disabled
      </Typography>
    );
    fireEvent.click(screen.getByText('Disabled'));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('renders input when editable and clicked', () => {
    render(<Typography editable>Editable</Typography>);
    const textElement = screen.getByText('Editable');
    fireEvent.click(textElement);
    const input = screen.getByDisplayValue('Editable');
    expect(input).toBeInTheDocument();
  });

  it('updates text after editing', () => {
    render(<Typography editable>Change Me</Typography>);
    fireEvent.click(screen.getByText('Change Me'));

    const input = screen.getByDisplayValue('Change Me');
    fireEvent.change(input, { target: { value: 'Updated' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });

    expect(screen.getByText('Updated')).toBeInTheDocument();
  });

  it('exits editing mode on blur', () => {
    render(<Typography editable>Blur Test</Typography>);
    fireEvent.click(screen.getByText('Blur Test'));
    const input = screen.getByDisplayValue('Blur Test');
    fireEvent.blur(input);
    expect(screen.getByText('Blur Test')).toBeInTheDocument();
  });
});
