import {appReducerTypes} from './appReducerTypes';

export const appReducer = (state = {}, action) => {
  switch (action.type) {
    case appReducerTypes.SET_USER_SELECTED:
      return {
        ...state,
        userSelected: action.payload,
      };

    case appReducerTypes.SET_USER_SELECTED_ID:
      return {
        ...state,
        userSelectedId: action.payload,
      };

    case appReducerTypes.DELETE_USER_SELECTED:
      return {
        ...state,
        userSelected: null,
        userSelectedId: null,
      };

    default:
      return state;
  }
};
