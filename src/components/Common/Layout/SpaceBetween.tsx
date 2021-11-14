import { ReactNode } from 'react';
import styled from 'styled-components';

type SpaceBetweenStyleProps = {
  width?: string;
  height?: string;
  margin?: string;
  alignItems?: 'flex-start' | 'center' | 'flex-end';
}

type SpaceBetweenProps = SpaceBetweenStyleProps & {
  children: ReactNode;
}

const SpaceBetween = ({
  width,
  height,
  margin = '0 0 0 0',
  alignItems = 'center',
  children,
}: SpaceBetweenProps) => {
  return (
    <SpaceBetweenContainer
      width={width}
      height={height}
      margin={margin}
      alignItems={alignItems}
    >
      {children}
    </SpaceBetweenContainer>
  );
}

const SpaceBetweenContainer = styled.div<SpaceBetweenStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: space-between;
  margin: ${({ margin }) => margin};
`;

export default SpaceBetween;