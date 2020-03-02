import { addBudgetItem, deleteBudgetItem, updateBudgetitem } from '../services';
import {
  BUDGET_ITEM_TYPES,
  ADD_EXPENSE,
  DELETE_EXPENSE,
  UPDATE_EXPENSE,
} from '../types';

// actions

export const addExpense = newExpense => ({
  type: ADD_EXPENSE,
  payload: addBudgetItem(BUDGET_ITEM_TYPES.EXPENSE, newExpense),
});

export const deleteExpense = expenseToDelete => ({
  type: DELETE_EXPENSE,
  payload: deleteBudgetItem(BUDGET_ITEM_TYPES.EXPENSE, expenseToDelete),
});

export const updateExpense = expenseToUpdate => ({
  type: UPDATE_EXPENSE,
  payload: updateBudgetitem(BUDGET_ITEM_TYPES.EXPENSE, expenseToUpdate),
});
