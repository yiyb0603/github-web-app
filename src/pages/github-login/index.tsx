import { GetServerSidePropsContext, NextPage } from 'next';
import authRepository from '@/repository/auth/auth.repository';
import { githubInstance } from '@/lib/axios';

const GithubLoginPage: NextPage = () => {
  return (
    <div></div>
  );
}

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  try {
    const { code } = ctx.query;
    const { access_token } = await authRepository.fetchAccessToken(String(code));

    ctx.res.setHeader('set-Cookie', `access_token=${access_token};`);
    githubInstance.defaults.headers.common['Authorization'] = `token ${access_token}`;

    const { login } = await authRepository.fetchMyInfo();

    return {
      redirect: {
        permanent: false,
        destination: `/user/${login}`,
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
}

export default GithubLoginPage;