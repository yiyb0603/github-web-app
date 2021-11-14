import appConfig from '@/lib/config';

const BASE_URL = 'https://github.com/login/oauth/authorize' as const;
export const GITHUB_OAUTH_URL =
  `${BASE_URL}?client_id=${appConfig.CLIENT_ID}&redirect_uri=${appConfig.REDIRECT_URL}` as const;