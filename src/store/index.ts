import { createStore } from 'vuex';
import modules from './modules';

import { userState } from './modules/user';
import { detailState } from './modules/detail';

export interface State {
  user: userState;
  detail: detailState;
}

export default createStore<State>({
  modules,
});
