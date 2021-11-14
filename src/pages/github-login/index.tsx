import { GetServerSidePropsContext, NextPage } from 'next';
import authRepository from '@/repository/auth/auth.repository';
import { githubInstance } from '@/lib/axios';
import { wrapper } from '@/stores/nextStore';
import { fetchMyInfoThunk } from '@/stores/user';
import isEmpty from '@/util/isEmpty';
import serverSideRedirect from '@/util/serverSideRedirect';

const GithubLoginPage: NextPage = () => {
  return (
    <div></div>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => {
  return async (ctx: GetServerSidePropsContext) => {
    const { code } = ctx.query;

    if (isEmpty(code)) {
      return serverSideRedirect('/');
    }

    try {
      const { access_token } = await authRepository.fetchAccessToken(String(code));
  
      ctx.res.setHeader('set-Cookie', `access_token=${access_token};`);
      githubInstance.defaults.headers.common['Authorization'] = `token ${access_token}`;
  
      const { dispatch, getState } = store;

      await dispatch(fetchMyInfoThunk());

      const { myInfo } = getState().user;

      return serverSideRedirect(`/user/${myInfo!.login}`);
    } catch (error) {
      return serverSideRedirect('/');
    }
  };
});

export default GithubLoginPage;