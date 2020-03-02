import { BUDGET_ITEM_MODEL, BUDGET_ITEM_TYPES } from './common.types';

export const ADD_INCOME = 'ADD_INCOME';
export const DELETE_INCOME = 'DELETE_INCOME';
export const UPDATE_INCOME = 'UPDATE_INCOME';

export const INCOME_MODEL = () => ({
  ...BUDGET_ITEM_MODEL(),
  type: BUDGET_ITEM_TYPES.EXPENSE,
});
