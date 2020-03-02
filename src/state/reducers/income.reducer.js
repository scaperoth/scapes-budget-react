import {
  ADD_INCOME,
  DELETE_INCOME,
  UPDATE_INCOME,
} from '../types/income.types';

const initialState = {
  loading: false,
  error: false,
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_INCOME}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${ADD_INCOME}_FULFILLED`:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
      };
    case `${ADD_INCOME}_REJECTED`:
      return {
        ...state,
        error: { ...action.payload.response },
      };
    case `${DELETE_INCOME}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${DELETE_INCOME}_FULFILLED`:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
      };
    case `${DELETE_INCOME}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: { ...action.payload.response },
      };
    case `${UPDATE_INCOME}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${UPDATE_INCOME}_FULFILLED`:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
      };
    case `${UPDATE_INCOME}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: { ...action.payload.response },
      };
    default:
      return state;
  }
};
