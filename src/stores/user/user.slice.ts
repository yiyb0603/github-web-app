import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { UserState } from '@/stores/user';
import { initialUserState } from '@/stores/user/user.initial';
import { fetchMyInfoThunk } from '@/stores/user/user.thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    builder.addCase(fetchMyInfoThunk.fulfilled, (state, action) => {
      state.myInfo = action.payload;
    });
  },
});

export const { reducer: userReducer } = userSlice;