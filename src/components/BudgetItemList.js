import React from 'react';
import { useSelector } from 'react-redux';

const BudgetItemList = () => {
  const expenses = useSelector(state => state.expenses);
  return (
    <ul>
      {expenses.list.map(expense => (
        <li key={expense.id}>
          Name: {expense.name} | id: {expense.id}
        </li>
      ))}
    </ul>
  );
};

export default BudgetItemList;
