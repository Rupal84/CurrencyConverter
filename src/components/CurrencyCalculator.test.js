import React from 'react';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import CurrencyCalculator from './CurrencyCalculator';
describe('CurrencyCalculator component', () => {
  it('renders correctly', () => {
    const {container} = render(<CurrencyCalculator />);
    expect(container).toMatchSnapshot();
  });
  
  it('fill the form, submit button is clicked for successful conversion', async () => {
    const {getByTestId} = render(<CurrencyCalculator />);
    userEvent.type(getByTestId('fromCurr'),'aud');
    userEvent.type(getByTestId('amount'),'10');
    userEvent.type(getByTestId('toCurr'),'aud');
    await act(async () => userEvent.click(screen.getByRole('button', { name: /convert/i })));
    expect(getByTestId('result')).toHaveTextContent('AUD to AUD: 10.00');
  });

  it('fill the form, submit button is clicked for failed conversion', async () => {
    const {getByTestId} = render(<CurrencyCalculator />);
    userEvent.type(getByTestId('fromCurr'),'xxx');
    userEvent.type(getByTestId('amount'),'10');
    userEvent.type(getByTestId('toCurr'),'aud');
    await act(async () => userEvent.click(screen.getByRole('button', { name: /convert/i })));
    expect(getByTestId('error')).toHaveTextContent('Unable to find rate for XXX/AUD');
  });
})

