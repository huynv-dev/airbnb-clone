import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination component', () => {
  const setup = (props = {}) => {
    const defaultProps = {
      current: 1,
      pageSize: 10,
      total: 100,
      onChange: jest.fn(),
      showSizeChanger: true,
      showQuickJumper: true,
    };
    return render(<Pagination {...defaultProps} {...props} />);
  };

  it('renders pagination buttons correctly', () => {
    setup();
    expect(screen.getByText('Previous')).toBeInTheDocument();
    expect(screen.getByText('Next')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('10 / page')).toBeInTheDocument();
  });

  it('calls onChange when clicking next page', () => {
    const onChange = jest.fn();
    setup({ onChange, current: 1 });
    fireEvent.click(screen.getByText('Next'));
    expect(onChange).toHaveBeenCalledWith(2, 10);
  });

  it('calls onChange when clicking previous page', () => {
    const onChange = jest.fn();
    setup({ onChange, current: 2 });
    fireEvent.click(screen.getByText('Previous'));
    expect(onChange).toHaveBeenCalledWith(1, 10);
  });

  it('disables previous button on first page', () => {
    setup({ current: 1 });
    expect(screen.getByText('Previous')).toBeDisabled();
  });

  it('disables next button on last page', () => {
    setup({ current: 10, total: 100 });
    expect(screen.getByText('Next')).toBeDisabled();
  });

  it('calls onChange when clicking a specific page', () => {
    const onChange = jest.fn();
    setup({ current: 1, onChange });
    fireEvent.click(screen.getByText('3'));
    expect(onChange).toHaveBeenCalledWith(3, 10);
  });

  it('changes page size and resets to page 1', () => {
    const onChange = jest.fn();
    setup({ onChange });
    fireEvent.change(screen.getByDisplayValue('10 / page'), { target: { value: '20' } });
    expect(onChange).toHaveBeenCalledWith(1, 20);
  });

  it('jumps to page on enter in quick jumper', () => {
    const onChange = jest.fn();
    setup({ onChange });
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '5' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(onChange).toHaveBeenCalledWith(5, 10);
  });

  it('does not jump if input is out of range', () => {
    const onChange = jest.fn();
    setup({ onChange });
    const input = screen.getByRole('spinbutton');
    fireEvent.change(input, { target: { value: '999' } });
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' });
    expect(onChange).not.toHaveBeenCalled();
  });

  it('renders ellipsis when total pages are more than 7', () => {
    setup({ total: 200, current: 5 });
    expect(screen.getAllByText('...').length).toBeGreaterThan(0);
  });
});
