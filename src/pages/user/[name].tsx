import { NextPage } from 'next';
import { wrapper } from '@/stores/nextStore';
import { fetchUserInfoThunk } from '@/stores/user';
import UserInfo from '@/components/Modules/User';

const UserPage: NextPage = () => {
  return (
    <UserInfo />
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  return async (ctx) => {
    if (!ctx.params?.name) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
        props: {},
      };
    }

    const userName = String(ctx.params.name);
    await store.dispatch(fetchUserInfoThunk(userName));

    return {
      props: {},
    };
  };
});

export default UserPage;