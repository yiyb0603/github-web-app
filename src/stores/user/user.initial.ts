import { Organization } from '@/types/organization.type';
import { Repository } from '@/types/repository.type';
import { Star } from '@/types/star.type';
import { User } from '@/types/user.type';

export type UserState = {
  myInfo: User | null; // 내 정보 상태
  userInfo: {
    user: User | null;
    repositories: Repository[];
    organizations: Organization[];
    starred: Star[];
  }; // 조회할 유저의 상태
}

export const initialUserState: UserState = {
  myInfo: null,
  userInfo: {
    user: null,
    repositories: [],
    organizations: [],
    starred: [],
  },
};