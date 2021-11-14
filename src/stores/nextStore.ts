import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import { rootReducer } from '@/stores';

export const createNextStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
}

export const wrapper = createWrapper(createNextStore);