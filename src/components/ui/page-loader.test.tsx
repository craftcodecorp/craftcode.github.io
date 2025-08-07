import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PageLoader } from './page-loader';

describe('PageLoader Component', () => {
  it('renders with default message', () => {
    render(<PageLoader />);
    
    // Check if the loading spinner is present
    const spinner = screen.getByRole('status');
    expect(spinner).toBeInTheDocument();
    
    // Check if the default message is displayed
    const defaultMessage = screen.getByText('Carregando...');
    expect(defaultMessage).toBeInTheDocument();
  });
  
  it('renders with custom message', () => {
    const customMessage = 'Carregando conteúdo...';
    render(<PageLoader message={customMessage} />);
    
    // Check if the custom message is displayed
    const message = screen.getByText(customMessage);
    expect(message).toBeInTheDocument();
  });
});
