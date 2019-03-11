import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
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
  amount:  4343, 
  createdAt: 0}
))
store.dispatch(addExpense(
  {description:'rent',
  note: '', 
  amount:  1095, 
  createdAt: 100}
))

const state = store.getState();
class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <AppRouter />
        </Provider>
    );
  }
}

export default App;
