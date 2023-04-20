import React, { useState, useEffect } from 'react'
import './css/App.css';
import Button from './components/Button';
import CustomerList from './components/CustomerDropDownList';
import RewardsList from './components/RewardsList';
import TransactionsList from './components/TransactionsList';
import { getAllRewards, getRewardsForCustomer, getTransactions, getCustomers } from './api';

function App() {
  const [rewards, setRewards] = useState([])
  const [customers, setCustomers] = useState([])
  const [transactions, setTransactions] = useState([])
  const [customer, setCustomer] = useState(1)

  const calculateRewardsForCustomer = async () => {
    const rewards = await getRewardsForCustomer(customer)
    setRewards(rewards)
  }

  const getAllTransactions = async e => {
    const transactions = await getTransactions()
    setTransactions(transactions)
  }

  const calculateAllRewards = async e => {
    const rewards = await getAllRewards()
    setRewards(rewards)
  }

  const listCustomers = async () => {
    const customers = await getCustomers()
    setCustomers(customers)
  }

  const onChangeCustomer = (e) => {
    setCustomer(Number(e.target.value))
  }

  useEffect(() => {
    listCustomers()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <CustomerList selectedCustomer={customer} onChange={onChangeCustomer} customers={customers} />
        <Button onClick={calculateRewardsForCustomer} color='blue'>Get Rewards for selected customer</Button>
        <Button onClick={calculateAllRewards} color='blue'>Get All Rewards</Button>
        <Button onClick={getAllTransactions} color='blue'>Get All Transactions</Button>
        <RewardsList rewards={rewards} />
        <TransactionsList transactions={transactions} />
      </header>
    </div>
  );
}

export default App;
