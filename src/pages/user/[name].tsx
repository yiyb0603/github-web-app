import { NextPage } from 'next';
import { wrapper } from '@/stores/nextStore';
import {
  fetchUserInfoThunk,
  fetchUserOrganizationsThunk,
  fetchUserRepositoriesThunk,
  fetchUserStarredThunk,
} from '@/stores/user';
import UserInfo from '@/components/Modules/User';
import serverSideRedirect from '@/util/serverSideRedirect';

const UserPage: NextPage = () => {
  return (
    <UserInfo />
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  return async (ctx) => {
    if (!ctx.params?.name) {
      return serverSideRedirect('/');
    }

    const userName = String(ctx.params.name);

    const { dispatch } = store;
    await Promise.all([
      dispatch(fetchUserInfoThunk(userName)),
      dispatch(fetchUserOrganizationsThunk(userName)),
      dispatch(fetchUserRepositoriesThunk(userName)),
      dispatch(fetchUserStarredThunk(userName)),
    ]);

    return {
      props: {},
    };
  };
});

export default UserPage;