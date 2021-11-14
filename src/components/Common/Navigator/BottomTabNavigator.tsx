import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdPerson } from 'react-icons/io';
import useUserInfo from '@/hooks/user/useUserInfo';
import NavigatorItem from './NavigatorItem';

const BottomTabNavigator = (): JSX.Element => {
  const { myInfo } = useUserInfo();

  if (myInfo === null) {
    return <></>;
  }

  return (
    <BottomTabNavigatorWrapper>
      <NavigatorItem
        icon={AiOutlineSearch}
        name='Search'
        link='/search'
      />

      <NavigatorItem
        icon={IoMdPerson}
        name='Profile'
        link={`/user/${myInfo?.login}`}
      />
    </BottomTabNavigatorWrapper>
  );
}

const BottomTabNavigatorWrapper = styled.div`
  width: 100%;
  max-width: 550px;
  margin: 0 auto;
  padding: 1rem 0;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${({ theme }) => theme.color.background.medium};
`;

export default BottomTabNavigator;