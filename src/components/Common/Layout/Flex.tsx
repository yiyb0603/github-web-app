import { ReactNode } from 'react';
import styled from 'styled-components';

type FlexStyleProps = {
  width?: string;
  height?: string;
  gap?: string;
  flexDirection?: 'row' | 'column';
  justifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-around' | 'space-between';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline';
  margin?: string;
}

type FlexProps = FlexStyleProps & {
  onClick?: () => void;
  children: ReactNode;
}

const Flex = ({
  width,
  height,
  gap,
  flexDirection = 'row',
  justifyContent,
  alignItems = 'center',
  margin,
  onClick,
  children,
}: FlexProps) => {
  return (
    <FlexContainer
      width={width}
      height={height}
      gap={gap}
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
      onClick={onClick}
    >
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div<FlexStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;

export default Flex;