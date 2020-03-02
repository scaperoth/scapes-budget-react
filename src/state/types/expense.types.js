import { BUDGET_ITEM_TYPES, BUDGET_ITEM_MODEL } from './common.types';

export const ADD_EXPENSE = 'ADD_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';
export const UPDATE_EXPENSE = 'UPDATE_EXPENSE';

export const EXPENSE_MODEL = () => ({
  ...BUDGET_ITEM_MODEL(),
  type: BUDGET_ITEM_TYPES.EXPENSE,
});
