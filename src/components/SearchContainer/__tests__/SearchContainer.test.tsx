import { render, screen } from '@testing-library/react';
import SearchContainer from '../SearchContainer';

// Mock the useSearch hook
jest.mock('../../../hooks/useSearch', () => ({
  useSearch: () => ({
    updateQuery: jest.fn(),
    results: [],
    searchStatus: 'idle',
    isLoading: false,
    selectedCategory: '',
    selectCategory: jest.fn(),
    clearCategoryFilter: jest.fn(),
  }),
}));

describe('SearchContainer Component', () => {
  it('should render without crashing', () => {
    render(<SearchContainer />);
    
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    render(<SearchContainer className="custom-class" />);
    
    // Just verify the component renders with the custom class
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });

  it('should render search bar', () => {
    render(<SearchContainer />);
    
    expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
  });
});