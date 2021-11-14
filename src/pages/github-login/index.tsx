import { GetServerSidePropsContext, NextPage } from 'next';
import authRepository from '@/repository/auth/auth.repository';
import { githubInstance } from '@/lib/axios';
import { wrapper } from '@/stores/nextStore';
import { fetchMyInfoThunk } from '@/stores/user';
import isEmpty from '@/util/isEmpty';

const GithubLoginPage: NextPage = () => {
  return (
    <div></div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  return async (ctx: GetServerSidePropsContext) => {
    const { code } = ctx.query;

    if (isEmpty(code)) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
        props: {},
      };
    }

    try {
      const { access_token } = await authRepository.fetchAccessToken(String(code));
  
      ctx.res.setHeader('set-Cookie', `access_token=${access_token};`);
      githubInstance.defaults.headers.common['Authorization'] = `token ${access_token}`;
  
      const { dispatch, getState } = store;

      await dispatch(fetchMyInfoThunk());

      const { myInfo } = getState().user;

      return {
        redirect: {
          permanent: false,
          destination: `/user/${myInfo!.login}`,
        },
        props: {},
      };
    } catch (error) {
      return {
        redirect: {
          permanent: false,
          destination: '/',
        },
        props: {},
      };
    }
  };
});

export default GithubLoginPage;