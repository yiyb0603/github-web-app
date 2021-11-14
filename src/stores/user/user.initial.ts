import { User } from '@/types/user.type';

export type UserState = {
  myInfo: User | null; // 내 정보 상태
  userInfo: User | null; // 조회할 유저의 상태
}

export const initialUserState: UserState = {
  myInfo: null,
  userInfo: null,
};