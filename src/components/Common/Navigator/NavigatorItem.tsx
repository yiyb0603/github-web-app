import styled from 'styled-components';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { IconType } from 'react-icons';

type NavigatorItemProps = {
  icon: IconType;
  name: string;
  link: string;
}

const NavigatorItem = ({
  icon: Icon,
  name,
  link,
}: NavigatorItemProps): JSX.Element => {
  const { asPath } = useRouter();

  return (
    <Link
      href={link}
      passHref
    >
      <ItemWrapper active={asPath.includes(link)}>
        <Icon fontSize='2.4rem' />
        <NavigatorName>{name}</NavigatorName>
      </ItemWrapper>
    </Link>
  );
}

const ItemWrapper = styled.a<{ active: boolean }>`
  text-align: center;
  text-decoration: none;
  color: ${({ active, theme }) => {
    return active ? theme.color.blue[500] : theme.color.font.medium;
  }};
`;

const NavigatorName = styled.div`
  font-size: 1.6rem;
  margin-top: 4px;
`;

export default NavigatorItem;