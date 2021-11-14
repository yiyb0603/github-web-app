import useRootSelector from '@/hooks/util/useRootSelector';

const useUserInfo = () => {
  const { userInfo } = useRootSelector(({ user }) => user);

  return {
    userInfo,
  };
}

export default useUserInfo;