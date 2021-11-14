import { useSelector } from 'react-redux';
import { RootState } from '@/stores';

type StateSelector<T> = (state: RootState) => T;

const useRootSelector = <T>(selector: StateSelector<T>) => {
  return useSelector(selector);
}

export default useRootSelector;