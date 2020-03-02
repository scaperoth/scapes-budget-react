import React from 'react';
import BudgetItemList from '../../components/BudgetItemList';
import BudgetItemAddForm from '../../components/BudgetItemAddForm';

import './Home.scss';

const Home = () => (
  <div id="home-page">
    <BudgetItemAddForm />
    <BudgetItemList />
  </div>
);

export default Home;
