import styled from 'styled-components';
import { ChildrenProps } from '@/types/component.type';

const PageTemplate = ({
  children,
}: ChildrenProps): JSX.Element => {
  return (
    <PageTemplateWrapper>
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </PageTemplateWrapper>
  );
}

const PageTemplateWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.color.background.bold};
`;

const ChildrenWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: 550px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.color.background.bold};
  border: ${({ theme }) => `1px solid ${theme.color.background.light}`};
`;

export default PageTemplate;