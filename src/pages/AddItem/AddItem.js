import React from 'react';
import BudgetItemList from '../../components/BudgetItemList';
import BudgetItemAddForm from '../../components/BudgetItemAddForm';

const AddItem = () => (
  <div id="add-item-page">
    <BudgetItemAddForm />
    <BudgetItemList />
  </div>
);

export default AddItem;
