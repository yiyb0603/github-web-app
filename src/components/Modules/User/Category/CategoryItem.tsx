import styled from 'styled-components';
import { IconType } from 'react-icons';
import Flex from '@/components/Common/Layout/Flex';
import SpaceBetween from '@/components/Common/Layout/SpaceBetween';

type CategoryItemProps = {
  icon: IconType;
  name: string;
  count: number;
  color: string;
}

const CategoryItem = ({
  icon: Icon,
  name,
  count,
  color,
}: CategoryItemProps): JSX.Element => {
  return (
    <CategoryItemWrapper>
      <SpaceBetween>
        <Flex gap='10px'>
          <IconWrapper color={color}>
            <Icon
              fontSize='2rem'
              color='white'
            />
          </IconWrapper>
          <CategoryName>{name}</CategoryName>
        </Flex>

        <Count>{count}</Count>
      </SpaceBetween>
    </CategoryItemWrapper>
  );
}

const CategoryItemWrapper = styled.div`
  width: 100%;
  cursor: pointer;
`;

const IconWrapper = styled.div<{ color: string }>`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  border-radius: 5px;
`;

const CategoryName = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.font.medium};
`;

const Count = styled.div`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.color.font.light};
`;

export default CategoryItem;