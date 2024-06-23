import React from 'react';
import { describe, it, expect, test } from 'vitest'; // vi have a mock feature
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('demo', () => {
  expect(true).toBe(true);
});

describe('render', () => {
  it('renders the main page', () => {
    //const component = ReactTestUtils.renderIntoDocument()
    const component = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    expect(true).toBeTruthy();
    expect(component).toBe(component);
  });
});
