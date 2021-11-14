import { ReactNode } from 'react';
import styled from 'styled-components';

type FlexStyleProps = {
  width?: string;
  height?: string;
  gap?: string;
  justifyContent?: 'flex-start' | 'center' | 'flex-end';
  alignItems?: 'flex-start' | 'center' | 'flex-end' | 'baseline';
  margin?: string;
}

type FlexProps = FlexStyleProps & {
  children: ReactNode;
}

const Flex = ({
  width,
  height,
  gap,
  justifyContent,
  alignItems = 'center',
  margin,
  children,
}: FlexProps) => {
  return (
    <FlexContainer
      width={width}
      height={height}
      gap={gap}
      justifyContent={justifyContent}
      alignItems={alignItems}
      margin={margin}
    >
      {children}
    </FlexContainer>
  );
}

const FlexContainer = styled.div<FlexStyleProps>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  gap: ${({ gap }) => gap};
  margin: ${({ margin }) => margin};
`;

export default Flex;