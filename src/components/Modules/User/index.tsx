import styled from 'styled-components';
import Profile from '@/components/Modules/User/Profile';
import useUserInfo from '@/hooks/user/useUserInfo';
import UserCategory from '@/components/Modules/User/Category';

const UserInfo = (): JSX.Element => {
  const { userInfo } = useUserInfo();

  return (
    <UserInfoWrapper>
      <Profile
        userInfo={userInfo?.user}
      />

      <UserCategory
        repositories={userInfo.repositories}
        organizations={userInfo.organizations}
        starreds={userInfo.starred}
      />
    </UserInfoWrapper>
  );
}

const UserInfoWrapper = styled.div``;

export default UserInfo;