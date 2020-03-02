import { combineReducers } from 'redux';
import expenses from './expense.reducer';
import incomes from './income.reducer';

const reducers = combineReducers({
  expenses,
  incomes,
});

export default reducers;
