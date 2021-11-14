import authRepository from '@/repository/auth/auth.repository';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMyInfoThunk = createAsyncThunk('fetchMyInfoThunk', async () => {
  return await authRepository.fetchMyInfo();
});

export const fetchUserInfoThunk = createAsyncThunk('fetchUserInfoThunk', async (name: string) => {
  return await authRepository.fetchUserInfo(name);
});