import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Modal from './Modal';

describe('Modal Component', () => {
  const mockOnClose = jest.fn();
  const mockOnSubmit = jest.fn();
  const mockSecondaryAction = jest.fn();

  const defaultProps = {
    isOpen: true,
    onClose: mockOnClose,
    onSubmit: mockOnSubmit,
    title: 'Test Modal',
    actionLabel: 'Submit',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders modal when isOpen is true', () => {
    render(<Modal {...defaultProps} />);
    expect(screen.getByTestId('modal-container')).toBeInTheDocument();
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
  });

  it('does not render modal when isOpen is false', () => {
    render(<Modal {...defaultProps} isOpen={false} />);
    expect(screen.queryByTestId('modal-container')).not.toBeInTheDocument();
  });

  it('calls onClose when clicking overlay', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByTestId('modal-overlay'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onClose when clicking close button', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByTestId('close-button'));
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('calls onSubmit when clicking primary action button', () => {
    render(<Modal {...defaultProps} />);
    fireEvent.click(screen.getByText('Submit'));
    expect(mockOnSubmit).toHaveBeenCalled();
  });

  it('renders and handles secondary action', () => {
    render(
      <Modal
        {...defaultProps}
        secondaryAction={mockSecondaryAction}
        secondaryActionLabel="Cancel"
      />
    );
    
    const cancelButton = screen.getByText('Cancel');
    expect(cancelButton).toBeInTheDocument();
    
    fireEvent.click(cancelButton);
    expect(mockSecondaryAction).toHaveBeenCalled();
  });

  it('disables all actions when disabled prop is true', () => {
    render(
      <Modal
        {...defaultProps}
        disabled
        secondaryAction={mockSecondaryAction}
        secondaryActionLabel="Cancel"
      />
    );

    fireEvent.click(screen.getByText('Submit'));
    fireEvent.click(screen.getByText('Cancel'));
    fireEvent.click(screen.getByTestId('modal-overlay'));
    fireEvent.click(screen.getByTestId('close-button'));

    expect(mockOnSubmit).not.toHaveBeenCalled();
    expect(mockSecondaryAction).not.toHaveBeenCalled();
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('renders custom body and footer content', () => {
    const customBody = <div data-testid="custom-body">Custom Body</div>;
    const customFooter = <div data-testid="custom-footer">Custom Footer</div>;

    render(
      <Modal
        {...defaultProps}
        body={customBody}
        footer={customFooter}
      />
    );

    expect(screen.getByTestId('custom-body')).toBeInTheDocument();
    expect(screen.getByTestId('custom-footer')).toBeInTheDocument();
  });
}); 