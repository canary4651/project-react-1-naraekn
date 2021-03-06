import React from 'react';

import { render } from '@testing-library/react';

import { useSelector } from 'react-redux';

import { MemoryRouter } from 'react-router-dom';

import ResultPage from './ResultPage';

import RESULTS from '../../fixtures/results';

test('ResultPage', () => {
  useSelector.mockImplementation((selector) => selector({
    result: {
      first: RESULTS[0],
      second: RESULTS[1],
      last: RESULTS[2],
    },
  }));

  const { getByText } = render((
    <MemoryRouter>
      <ResultPage />
    </MemoryRouter>
  ));

  expect(getByText(/결과/)).not.toBeNull();
});
