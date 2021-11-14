import App, { AppContext, AppInitialProps, AppProps } from 'next/app';
import cookies from 'next-cookies';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import PageTemplate from '@/components/Template/PageTemplate';
import { wrapper } from '@/stores/nextStore';
import isEmpty from '@/util/isEmpty';
import { githubInstance } from '@/lib/axios';
import { fetchMyInfoThunk } from '@/stores/user';

const GithubApp = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <ThemeProvider theme={{
      color: darkTheme,
    }}>
      <PageTemplate>
        <Component {...pageProps} />
      </PageTemplate>

      <GlobalStyle />
    </ThemeProvider>
  );
}

GithubApp.getInitialProps = wrapper.getInitialAppProps((store) => {
  return async (context: AppContext) => {
    const appContext: AppInitialProps = await App.getInitialProps(context);

    const { ctx } = context;
    const { access_token } = cookies(ctx);

    if (!isEmpty(access_token)) {
      githubInstance.defaults.headers.common['Authorization'] = `token ${access_token}`;

      await store.dispatch(fetchMyInfoThunk());
    }

    return {
      ...appContext,
    };
  };
});

export default wrapper.withRedux(GithubApp);