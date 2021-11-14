import { ActionReducerMapBuilder, createSlice } from '@reduxjs/toolkit';
import { UserState, initialUserState } from '@/stores/user/user.initial';
import {
  fetchMyInfoThunk,
  fetchUserInfoThunk,
  fetchUserOrganizationsThunk,
  fetchUserRepositoriesThunk,
  fetchUserStarredThunk,
} from '@/stores/user/user.thunk';

const userSlice = createSlice({
  name: 'user',
  initialState: initialUserState,
  reducers: {},
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    builder.addCase(fetchMyInfoThunk.fulfilled, (state, action) => {
      state.myInfo = action.payload;
    });

    builder.addCase(fetchUserInfoThunk.fulfilled, (state, action) => {
      state.userInfo.user = action.payload;
    });

    builder.addCase(fetchUserOrganizationsThunk.fulfilled, (state, action) => {
      state.userInfo.organizations = action.payload;
    });

    builder.addCase(fetchUserRepositoriesThunk.fulfilled, (state, action) => {
      state.userInfo.repositories = action.payload;
    });

    builder.addCase(fetchUserStarredThunk.fulfilled, (state, action) => {
      state.userInfo.starred = action.payload;
    });
  },
});

export const { reducer: userReducer } = userSlice;