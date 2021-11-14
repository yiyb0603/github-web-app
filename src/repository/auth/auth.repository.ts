import { githubInstance, loginInstance } from '@/lib/axios';
import appConfig from '@/lib/config';
import { AccessTokenResponse } from '@/types/auth.type';
import { User } from '@/types/user.type';

class AuthRepository {
  public async fetchAccessToken(code: string) {
    const fetchTokenDto = {
      code,
      client_id: appConfig.CLIENT_ID,
      client_secret: appConfig.CLIENT_SECRET,
    };

    const { data } = await loginInstance.post<AccessTokenResponse>('/access_token', fetchTokenDto);
    
    return data;
  }

  public async fetchMyInfo() {
    const { data } = await githubInstance.get<User>('/user');

    return data;
  }

  public async fetchUserInfo(name: string) {
    const { data } = await githubInstance.get<User>(`/users/${name}`);

    return data;
  }
}

export default new AuthRepository();