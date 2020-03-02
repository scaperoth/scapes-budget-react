import {
  deleteItemFromArrayByKey,
  addItemToArrayUniqueKey,
  updateItemInArrayByKey,
} from '../../utils/array.utils';
import { ServiceError } from '../../utils/error.utils';
import { BUDGET_ITEM_IDENTIFIER } from '../types';
import {
  fakeLatency,
  getBudgetByType,
  generateIdForBudgetItem,
} from './helpers';

export const addBudgetItem = async (itemType, budgetItemToAdd) => {
  try {
    await fakeLatency();
    const existingBudgetItems = getBudgetByType(itemType).list;
    const updatedBudgetItem = generateIdForBudgetItem(
      existingBudgetItems,
      budgetItemToAdd,
    );
    const newBudgetItems = addItemToArrayUniqueKey(
      existingBudgetItems,
      updatedBudgetItem,
      'name',
    );
    return newBudgetItems;
  } catch (err) {
    throw new ServiceError(err.message, {
      status: 500,
      message: err.message,
    });
  }
};

export const deleteBudgetItem = async (itemType, budgetItemToDelete) => {
  try {
    const existingBudgetItems = getBudgetByType(itemType).list;
    await fakeLatency();
    const newBudgetItems = deleteItemFromArrayByKey(
      existingBudgetItems,
      budgetItemToDelete,
      BUDGET_ITEM_IDENTIFIER,
    );
    return newBudgetItems;
  } catch (err) {
    throw new ServiceError(err.message, {
      status: 500,
      message: err.message,
    });
  }
};

export const updateBudgetitem = async (itemType, budgetItemToUpdate) => {
  try {
    const existingBudgetItems = getBudgetByType(itemType).list;
    await fakeLatency();
    const newBudgetItems = updateItemInArrayByKey(
      existingBudgetItems,
      budgetItemToUpdate,
      BUDGET_ITEM_IDENTIFIER,
    );
    return newBudgetItems;
  } catch (err) {
    throw new ServiceError(err.message, {
      status: 500,
      message: err.message,
    });
  }
};
