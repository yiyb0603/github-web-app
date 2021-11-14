import styled from 'styled-components';
import { AiOutlinePaperClip } from 'react-icons/ai';
import { IoMdBusiness, IoMdPerson } from 'react-icons/io';
import { GoLocation } from 'react-icons/go';
import Flex from '@/components/Common/Layout/Flex';
import { User } from '@/types/user.type';
import ProfileInfo from './ProfileInfo';

type ProfileProps = {
  userInfo: User | null;
}

const Profile = ({
  userInfo,
}: ProfileProps): JSX.Element => {
  if (userInfo === null) {
    return <></>;
  }

  return (
    <ProfileWrapper>
      <Flex
        gap='1.5rem'
        margin='0 0 1.4rem 0'
      >
        <ProfileImage
          src={userInfo.avatar_url || '/images/default_profile.png'}
          alt='github avatar'
        />

        <div>
          <UserName>{userInfo.name}</UserName>
          <UserId>{userInfo.login}</UserId>
        </div>
      </Flex>

      <OnelineIntroduce>{userInfo.bio}</OnelineIntroduce>

      <Flex
        flexDirection='column'
        alignItems='flex-start'
        gap='8px'
      >
        <ProfileInfo
          icon={IoMdBusiness}
          text={userInfo.company}
        />

        <ProfileInfo
          icon={GoLocation}
          text={userInfo.location}
        />

        <ProfileInfo
          icon={AiOutlinePaperClip}
          link={userInfo.blog}
          text={userInfo.blog}
        />

        <ProfileInfo
          icon={IoMdPerson}
          text={`${userInfo.followers} followers, ${userInfo.following} followings`}
        />
      </Flex>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  padding: 2rem 1rem;
  background-color: ${({ theme }) => theme.color.background.medium};
`;

const ProfileImage = styled.img`
  width: 70px;
  border-radius: 50%;
  object-fit: cover;
`;

const UserName = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.color.font.bold};
  margin-bottom: 4px;
`;

const UserId = styled.div`
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.4px;
  color: ${({ theme }) => theme.color.font.light};
`;

const OnelineIntroduce = styled.div`
  padding: 1rem;
  border-radius: 5px;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.font.medium};
  background-color: ${({ theme }) => theme.color.background.light};
  margin-bottom: 1rem;
`;

export default Profile;