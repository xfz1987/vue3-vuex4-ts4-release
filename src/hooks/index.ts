import { useStore } from 'vuex';
import { State } from '../store';
// 这几个玩意的type
import { Getters, Dispatch, Commit } from './utils';

interface UseStoreHooks {
  state: State;
  getters: Getters;
  commit: Commit;
  dispatch: Dispatch;
}

const useStoreHooks = (): UseStoreHooks => {
  const store = useStore<State>();
  // return store;
  // 自定义的进行输出结果
  const { state, getters, dispatch, commit }: UseStoreHooks = store;
  return {
    state,
    getters,
    commit,
    dispatch,
  };
};

export { useStoreHooks };
export default useStoreHooks;
