import authRepository from '@/repository/auth/auth.repository';
import userRepository from '@/repository/user/user.repository';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMyInfoThunk = createAsyncThunk('fetchMyInfoThunk', async () => {
  return await authRepository.fetchMyInfo();
});

export const fetchUserInfoThunk = createAsyncThunk('fetchUserInfoThunk', async (
  userName: string,
) => {
  return await authRepository.fetchUserInfo(userName);
});

export const fetchUserRepositoriesThunk = createAsyncThunk('fetchUserRepositoriesThunk', async (
  userName: string,
) => {
  return await userRepository.fetchUserRepositories(userName);
});

export const fetchUserOrganizationsThunk = createAsyncThunk('fetchUserOrganizationsThunk', async (
  userName: string,
) => {
  return await userRepository.fetchUserOrganizations(userName);
});

export const fetchUserStarredThunk = createAsyncThunk('fetchUserStarredThunk', async (
  userName: string,
) => {
  return await userRepository.fetchUserStarred(userName);
});