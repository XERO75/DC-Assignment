import { render, screen } from '@testing-library/react';
import SearchBar from '../SearchBar';

describe('SearchBar Component', () => {
  const defaultProps = {
    onSearch: jest.fn(),
    isLoading: false,
    hasError: false,
    placeholder: 'Search...',
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with default props', () => {
    render(<SearchBar {...defaultProps} />);
    
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  it('should be disabled when loading', () => {
    render(<SearchBar {...defaultProps} isLoading={true} />);
    
    const input = screen.getByPlaceholderText('Search...');
    expect(input).toBeDisabled();
  });
});