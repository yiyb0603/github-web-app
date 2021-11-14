import authRepository from '@/repository/auth/auth.repository';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMyInfoThunk = createAsyncThunk('fetchMyInfoThunk', async () => {
  const data = await authRepository.fetchMyInfo();

  return data;
});