import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  FormControl,
  TextField,
  NativeSelect,
  InputLabel,
  Grid,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import {
  FREQUENCY,
  BUDGET_ITEM_TYPES,
  BUDGET_ITEM_MODEL,
} from '../state/types';
import { addExpense, addIncome } from '../state/actions';

import SubmitButton from './SubmitButton';
import ErrorMessage from './ErrorMessage';
import SuccessMessage from './SuccessMessage';

const useStyles = makeStyles(theme => ({
  root: {},
  title: {
    textAlign: 'center',
    margin: theme.spacing(5),
    fontWeight: 100,
  },
  grid: {
    margin: theme.spacing(1),
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  formControl: {
    margin: theme.spacing(3),
    width: 300,
  },
}));

const BudgetItemAddForm = () => {
  const classes = useStyles();

  const error = useSelector(
    state => state.expenses.error || state.incomes.error,
  );
  const loading = useSelector(
    state => state.expenses.loading || state.incomes.loading,
  );
  const [newBudgetItem, setNewBudgetItem] = useState(BUDGET_ITEM_MODEL());
  const [success, setSuccess] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    setSuccess(false);
    switch (newBudgetItem.type) {
      case BUDGET_ITEM_TYPES.EXPENSE:
        try {
          await dispatch(addExpense(newBudgetItem));
          setNewBudgetItem(BUDGET_ITEM_MODEL());
          setSuccess(true);
        } catch (err) {
          setSuccess(false);
        }
        break;
      case BUDGET_ITEM_TYPES.INCOME:
        try {
          await dispatch(addIncome(newBudgetItem));
          setNewBudgetItem(BUDGET_ITEM_MODEL());
          setSuccess(true);
        } catch (err) {
          setSuccess(false);
        }
        break;
      default:
        break;
    }
  };

  const updateBudgetItem = e => {
    const { value, name } = e.target;
    const updatedBudgetItem = {
      ...newBudgetItem,
      [name]: value,
    };
    setNewBudgetItem(updatedBudgetItem);
  };

  return (
    <form className={classes.root}>
      <h2 className={classes.title}>Create Budget Item</h2>
      <Grid container className={classes.grid}>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <TextField
              label="Name"
              name="name"
              required
              value={newBudgetItem.name}
              onChange={updateBudgetItem}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <TextField
              value={newBudgetItem.startDate}
              label="Start Date"
              name="startDate"
              type="date"
              onChange={updateBudgetItem}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="frequency">Frequency</InputLabel>
            <NativeSelect name="frequency" onChange={updateBudgetItem}>
              {Object.keys(FREQUENCY).map(freq => (
                <option key={freq} value={FREQUENCY[freq]}>
                  {freq}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="type">Expense/Income</InputLabel>
            <NativeSelect name="type" onChange={updateBudgetItem}>
              {Object.keys(BUDGET_ITEM_TYPES).map(itemType => (
                <option key={itemType} value={BUDGET_ITEM_TYPES[itemType]}>
                  {itemType}
                </option>
              ))}
            </NativeSelect>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <FormControl className={classes.formControl}>
            <TextField
              value={newBudgetItem.amount}
              label="Amount"
              name="amount"
              type="number"
              min="0"
              step="1"
              onChange={updateBudgetItem}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <SubmitButton
            loading={loading}
            success={success}
            handleSubmit={handleSubmit}
          />
        </Grid>
      </Grid>
      <ErrorMessage error={error} />
      <SuccessMessage message="Success" open={success} />
    </form>
  );
};

export default BudgetItemAddForm;
