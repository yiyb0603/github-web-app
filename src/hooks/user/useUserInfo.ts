import useRootSelector from '@/hooks/util/useRootSelector';

const useUserInfo = () => {
  const { myInfo, userInfo } = useRootSelector(({ user }) => user);

  return {
    myInfo,
    userInfo,
  };
}

export default useUserInfo;