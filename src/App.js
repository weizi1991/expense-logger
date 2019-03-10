import React, { Component } from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();


store.dispatch(addExpense(
  {description:'water bill',
  note: '', 
  amount: 20, 
  createdAt: 0}
))
store.dispatch(addExpense(
  {description:'gas bill',
  note: '', 
  amount:  20, 
  createdAt: 0}
))
store.dispatch(setTextFilter('water'));

const state = store.getState();
console.log(getVisibleExpenses(state.expenses, state.filters));

class App extends Component {
  render() {
    return (
      <AppRouter />
    );
  }
}

export default App;
