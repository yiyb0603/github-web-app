import { configureStore } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { CombinedState, AnyAction, combineReducers, Reducer } from 'redux';
import { UserState } from '@/stores/user';
import { userReducer } from '@/stores/user';

type StoreState = {
  user: UserState;
}

type RootReducer = Reducer<CombinedState<StoreState>, AnyAction>;

export const rootReducer: RootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return combineReducers({
        user: userReducer,
      })(state, action);
  }
}

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;