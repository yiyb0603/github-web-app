import styled from 'styled-components';
import { IconType } from 'react-icons';
import Flex from '@/components/Common/Layout/Flex';
import isEmpty from '@/util/isEmpty';
import useColor from '@/hooks/theme/useColor';

type ProfileInfoProps = {
  icon: IconType;
  text: string;
  link?: string;
}

const ProfileInfo = ({
  text,
  link,
  icon: Icon,
}: ProfileInfoProps): JSX.Element => {
  const { color } = useColor();

  return (
    <Flex gap='6px'>
      <Icon
        color={color.font.medium}
        fontSize='2rem'
      />

      <LinkText
        isBold={!isEmpty(link)}
        onClick={() => link && window.open(link, '_self')}
      >
        {link || text}
      </LinkText>
    </Flex>
  );
}

const LinkText = styled.div<{ isBold: boolean }>`
  color: ${({ theme }) => theme.color.font.medium};
  font-weight: ${({ isBold }) => isBold && 'bold'};
  font-size: 1.4rem;
  cursor: ${({ isBold }) => isBold && 'pointer'}
`;

export default ProfileInfo;