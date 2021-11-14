import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { darkTheme } from '@/styles/theme';
import GlobalStyle from '@/styles/GlobalStyle';
import PageTemplate from '@/components/Template/PageTemplate';
import { wrapper } from '@/stores/nextStore';

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

export default wrapper.withRedux(GithubApp);