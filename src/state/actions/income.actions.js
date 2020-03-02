import { addBudgetItem, deleteBudgetItem, updateBudgetitem } from '../services';
import {
  BUDGET_ITEM_TYPES,
  ADD_INCOME,
  DELETE_INCOME,
  UPDATE_INCOME,
} from '../types';

// actions

export const addIncome = newExpense => ({
  type: ADD_INCOME,
  payload: addBudgetItem(BUDGET_ITEM_TYPES.INCOMES, newExpense),
});

export const deleteIncome = incomeToDelete => ({
  type: DELETE_INCOME,
  payload: deleteBudgetItem(BUDGET_ITEM_TYPES.INCOMES, incomeToDelete),
});

export const updateIncome = incomeToUpdate => ({
  type: UPDATE_INCOME,
  payload: updateBudgetitem(BUDGET_ITEM_TYPES.INCOMES, incomeToUpdate),
});
