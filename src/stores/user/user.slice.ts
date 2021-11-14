import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { UserState, initialUserState } from '@/stores/user/user.initial';
import { fetchMyInfoThunk, fetchUserInfoThunk } from '@/stores/user/user.thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    builder.addCase(fetchMyInfoThunk.fulfilled, (state, action) => {
      state.myInfo = action.payload;
    });

    builder.addCase(fetchUserInfoThunk.fulfilled, (state, action) => {
      state.userInfo = action.payload;
    });
  },
});

export const { reducer: userReducer } = userSlice;