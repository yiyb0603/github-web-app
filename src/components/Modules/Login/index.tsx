import styled from 'styled-components';
import { BsGithub } from 'react-icons/bs';
import Button from '@/components/Common/Button';
import Flex from '@/components/Common/Layout/Flex';
import useColor from '@/hooks/theme/useColor';
import pushToWindow from '@/util/pushToWindow';
import { GITHUB_OAUTH_URL } from '@/constants/github.constants';

const Login = (): JSX.Element => {
  const { color } = useColor();

  return (
    <LoginWrapper>
      <LoginBox>
        <LoginTitle>Welcome!</LoginTitle>
        <LoginGuide>If you want to start, First Login Please.</LoginGuide>

        <Button
          width='auto'
          height='45px'
          borderRadius='5px'
          padding='0 2rem'
          backgroundColor={color.background.bold}
          onClick={() => window.open(GITHUB_OAUTH_URL)}
        >
          <Flex
            gap='8px'
            justifyContent='center'
          >
            <GithubIcon />
            <LoginText>Login with Github</LoginText>
          </Flex>
        </Button>
      </LoginBox>
    </LoginWrapper>
  );
}

const LoginWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginBox = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.color.background.light}`};
  color: ${({ theme }) => theme.color.font.bold};
  padding: 4rem 1rem;
`;

const LoginTitle = styled.div`
  font-size: 4rem;
  margin-bottom: 2rem;
`;

const LoginGuide = styled.div`
  font-size: 2.2rem;
  text-align: center;
  line-height: 2.8rem;
  color: ${({ theme }) => theme.color.font.light};
  margin-bottom: 2rem;
`;

const GithubIcon = styled(BsGithub)`
  font-size: 2rem;
`;

const LoginText = styled.div`
  font-size: 2rem;
`;

export default Login;