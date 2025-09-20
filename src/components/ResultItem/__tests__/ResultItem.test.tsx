import { render, screen, fireEvent } from '@testing-library/react';
import ResultItem from '../ResultItem';

const mockResult = {
  title: 'React',
  description: 'A JavaScript library for building user interfaces',
  image: 'react-logo.png',
  url: 'https://reactjs.org',
  category: 'Frontend'
};

const defaultProps = {
  result: mockResult,
  onTagClick: jest.fn(),
};

describe('ResultItem Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render with all result data', () => {
    render(<ResultItem {...defaultProps} />);
    
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('A JavaScript library for building user interfaces')).toBeInTheDocument();
  });

  it('should render with image when provided', () => {
    render(<ResultItem {...defaultProps} />);
    
    const image = screen.getByAltText('React');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'react-logo.png');
  });

  it('should render fallback when no image', () => {
    const resultWithoutImage = {
      ...mockResult,
      image: ''
    };
    
    render(<ResultItem {...defaultProps} result={resultWithoutImage} />);
    
    expect(screen.getByText('R')).toBeInTheDocument(); // First letter of title
  });
});