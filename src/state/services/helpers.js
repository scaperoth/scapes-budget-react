import store from '../store';
import { itemExistsInArray } from '../../utils/array.utils';
import { BUDGET_ITEM_TYPES, BUDGET_ITEM_IDENTIFIER } from '../types';

export const generateRandomId = (padding = 9) => {
  const idRange = Number(''.padStart('9', padding));
  const randomId = Math.floor(Math.random() * Math.floor(idRange));
  return randomId.toString().padStart('0');
};

export const fakeLatency = async (minWaitInMs = 200, maxWaitInMs = 500) => {
  const waitTime =
    Math.floor(Math.random() * Math.floor(maxWaitInMs)) + minWaitInMs;
  return new Promise(resolve => setTimeout(resolve, waitTime));
};

export const generateIdForBudgetItem = (existingItems, newItem) => {
  const itemCopy = { ...newItem };
  let existingItem = true;
  do {
    const newId = generateRandomId();
    itemCopy.id = newId;
    existingItem = itemExistsInArray(
      existingItems,
      newItem,
      BUDGET_ITEM_IDENTIFIER,
    );
  } while (existingItem);
  return itemCopy;
};

export const getBudgetByType = itemType => {
  const state = store.getState();
  let itemTypeString = null;
  switch (itemType) {
    case BUDGET_ITEM_TYPES.INCOMES:
      itemTypeString = state.incomes;
      break;
    case BUDGET_ITEM_TYPES.EXPENSE:
      itemTypeString = state.expenses;
      break;
    default:
      throw new Error(`Invalid item type ${itemType} given`);
  }
  return itemTypeString;
};
