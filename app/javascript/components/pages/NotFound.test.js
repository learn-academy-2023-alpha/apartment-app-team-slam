import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

describe('NotFound component', () => {
  it('redirects to home page when link is clicked', () => {
    const { getByText } = render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const link = getByText('Go back to home page');
    fireEvent.click(link);

    expect(window.location.pathname).toBe('/');
  });
});