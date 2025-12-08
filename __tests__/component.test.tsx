import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: Error) => ({
    data,
    isLoading: !Boolean(data),
    isError: Boolean(error),
    refetch: jest.fn(),
  });

  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData());
  });

  test('renders loading state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders data when loaded successfully', async () => {
    const mockData = { title: 'Test Title' };
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/test title/i)).toBeInTheDocument());
  });

  test('renders error message when data fetching fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(undefined, mockError));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interaction with button click', async () => {
    const mockData = { title: 'Test Title' };
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());
  });

  test('checks accessibility features', async () => {
    const mockData = { title: 'Test Title' };
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData));
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('button', { name: /click me/i })).toHaveAttribute('aria-label');
    expect(screen.getByText(/test title/i)).toBeVisible();
  });

  test('handles edge cases with empty data', async () => {
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData());
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.queryByText(/no data available/i)).toBeInTheDocument());
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: Error) => ({
    data,
    isLoading: !Boolean(data),
    isError: Boolean(error),
    refetch: jest.fn(),
  });

  beforeEach(() => {
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData());
  });

  test('renders loading state', async () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('renders data when loaded successfully', async () => {
    const mockData = { title: 'Test Title' };
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/test title/i)).toBeInTheDocument());
  });

  test('renders error message when data fetching fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(undefined, mockError));
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interaction with button click', async () => {
    const mockData = { title: 'Test Title' };
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData));
    render(<CoreFunctionalityComponent />);
    fireEvent.click(screen.getByRole('button', { name: /click me/i }));
    await waitFor(() => expect(useExternalData).toHaveBeenCalled());
  });

  test('checks accessibility features', async () => {
    const mockData = { title: 'Test Title' };
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData(mockData));
    render(<CoreFunctionalityComponent />);
    expect(screen.getByRole('button', { name: /click me/i })).toHaveAttribute('aria-label');
    expect(screen.getByText(/test title/i)).toBeVisible();
  });

  test('handles edge cases with empty data', async () => {
    (useExternalData as jest.Mock).mockReturnValue(mockUseExternalData());
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.queryByText(/no data available/i)).toBeInTheDocument());
  });
});