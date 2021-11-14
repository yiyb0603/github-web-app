import Profile from '@/components/Modules/User/Profile';
import useUserInfo from '@/hooks/user/useUserInfo';
import styled from 'styled-components';

const UserInfo = (): JSX.Element => {
  const { userInfo } = useUserInfo();

  return (
    <UserInfoWrapper>
      <Profile
        userInfo={userInfo}
      />
    </UserInfoWrapper>
  );
}

const UserInfoWrapper = styled.div``;

export default UserInfo;