import { render, screen, fireEvent } from '@testing-library/react';
import Tag from '../Tag';

describe('Tag Component', () => {
  const defaultProps = {
    label: 'React',
    onClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default variant', () => {
    render(<Tag {...defaultProps} />);
    
    const tag = screen.getByText('React');
    expect(tag).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const mockOnClick = jest.fn();
    render(<Tag {...defaultProps} onClick={mockOnClick} />);
    
    const tag = screen.getByText('React');
    fireEvent.click(tag);
    
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const mockOnClick = jest.fn();
    render(<Tag {...defaultProps} onClick={mockOnClick} variant="disabled" />);
    
    const tag = screen.getByText('React');
    fireEvent.click(tag);
    
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});