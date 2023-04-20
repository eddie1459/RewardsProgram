import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import { getCustomers } from '../api';

jest.mock('../api', () => ({ getCustomers: jest.fn() }))

test('renders buttons', async () => {
  getCustomers.mockImplementation(() => Promise.resolve({id: 1}))
  render(<App />)
  const buttonRewards = screen.getByText(/Get Rewards for selected customer/i);
  const buttonAllRewards = screen.getByText(/Get All Rewards/i);
  const buttonAllTransactions = screen.getByText(/Get All Transactions/i);
  await waitFor(() => {
    expect(buttonRewards).toBeInTheDocument();
  })
  await waitFor(() => {
    expect(buttonAllRewards).toBeInTheDocument();
  })
  await waitFor(() => {
    expect(buttonAllTransactions).toBeInTheDocument();
  })

  const dropDownList = screen.getByTestId("customerList")
  expect(dropDownList).toBeInTheDocument()

  const rewardsList = screen.getByTestId("rewardsList")
  expect(rewardsList).toBeInTheDocument()

  const transactionsList = screen.getByTestId("transactionsList")
  expect(transactionsList).toBeInTheDocument()
});
