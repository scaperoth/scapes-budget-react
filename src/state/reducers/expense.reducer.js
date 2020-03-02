import { ADD_EXPENSE, DELETE_EXPENSE, UPDATE_EXPENSE } from '../types';

const initialState = {
  loading: false,
  error: false,
  list: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case `${ADD_EXPENSE}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${ADD_EXPENSE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
      };
    case `${ADD_EXPENSE}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: { ...action.payload.response },
      };
    case `${DELETE_EXPENSE}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${DELETE_EXPENSE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
      };
    case `${DELETE_EXPENSE}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: { ...action.payload.response },
      };
    case `${UPDATE_EXPENSE}_PENDING`:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case `${UPDATE_EXPENSE}_FULFILLED`:
      return {
        ...state,
        loading: false,
        list: [...action.payload],
      };
    case `${UPDATE_EXPENSE}_REJECTED`:
      return {
        ...state,
        loading: false,
        error: { ...action.payload.response },
      };
    default:
      return state;
  }
};
