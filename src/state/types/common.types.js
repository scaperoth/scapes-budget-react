import { getCurrentDate } from '../../utils/date.utils';

export const FREQUENCY = {
  ONE_TIME: 0,
  WEEKLY: 1,
  MONTHLY: 2,
  YEARLY: 3,
};

export const BUDGET_ITEM_TYPES = {
  EXPENSE: 1,
  INCOME: 2,
};

export const BUDGET_ITEM_IDENTIFIER = 'id';

export const BUDGET_ITEM_MODEL = () => ({
  [BUDGET_ITEM_IDENTIFIER]: 0,
  type: BUDGET_ITEM_TYPES.EXPENSE,
  name: '',
  startDate: getCurrentDate(),
  frequency: FREQUENCY.ONE_TIME,
  amount: 0,
});
