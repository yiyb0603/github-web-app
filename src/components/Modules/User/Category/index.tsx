import { MdOutlineBusiness } from 'react-icons/md';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { AiOutlineStar } from 'react-icons/ai';
import styled from 'styled-components';
import Flex from '@/components/Common/Layout/Flex';
import CategoryItem from './CategoryItem';
import { Repository } from '@/types/repository.type';
import { Organization } from '@/types/organization.type';
import useColor from '@/hooks/theme/useColor';
import { Star } from '@/types/star.type';

type UserCategoryProps = {
  repositories: Repository[];
  organizations: Organization[];
  starreds: Star[];
}

const UserCategory = ({
  repositories,
  organizations,
  starreds,
}: UserCategoryProps): JSX.Element => {
  const { color } = useColor();

  return (
    <CategoriesWrapper>
      <Flex
        width='100%'
        gap='1.4rem'
        flexDirection='column'
        alignItems='flex-start'
      >
        <CategoryItem
          icon={RiGitRepositoryLine}
          name='Repositories'
          count={repositories.length}
          color={color.background.light}
        />

        <CategoryItem
          icon={MdOutlineBusiness}
          name='Organizations'
          count={organizations.length}
          color={color.orange[500]}
        />

        <CategoryItem
          icon={AiOutlineStar}
          name='Starred'
          count={starreds.length}
          color={color.yellow[500]}
        />
      </Flex>
    </CategoriesWrapper>
  );
}

const CategoriesWrapper = styled.div`
  margin-top: 1rem;
  padding: 1rem;
  background-color: ${({ theme }) => theme.color.background.medium};
`;

export default UserCategory;