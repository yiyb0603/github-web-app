import { CSSProperties, ReactNode } from 'react';
import styled from 'styled-components';

type ButtonStyleProps = {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontSize?: string;
  margin?: string;
  padding?: string;
  border?: string;
  borderRadius?: string;
  transition?: string;
}

type ButtonProps = ButtonStyleProps & {
  onClick: () => void;
  children: ReactNode;
  style?: CSSProperties;
}

const Button = ({
  width = '72px',
  height = '32px',
  backgroundColor,
  color,
  fontSize,
  border,
  borderRadius,
  margin,
  padding,
  transition,
  children,
  onClick,
  style,
}: ButtonProps) => {
  return (
    <ButtonWrapper
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      transition={transition}
      border={border}
      borderRadius={borderRadius}
      onClick={onClick}
      style={style}
    >
      {children}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.button<ButtonStyleProps>`
  outline: none;
  border: none;
  vertical-align: middle;
  display: inline;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  background-color: ${({ theme, backgroundColor }) => {
    return backgroundColor || theme.color.background.medium;
  }};
  text-align: center;
  color: ${({ theme, color }) => color || theme.color.font.medium};
  font-size: ${({ fontSize }) => fontSize};
  margin: ${({ margin }) => margin};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border};
  border-radius: ${({ borderRadius }) => borderRadius};
  transition: ${({ transition }) => transition};
  user-select: none;
  cursor: pointer;
`;

export default Button;