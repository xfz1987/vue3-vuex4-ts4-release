// export type userState = {
//   isLogin: boolean;
// };

// const state: userState = {
const state = {
  isLogin: true,
};

export type userState = typeof state;

export default {
  namespaced: true,
  state,
  getters: {
    loginInfo: (state: userState): string => {
      return `${state.isLogin ? '已登陆' : '未登陆'}`;
    },
  },
  mutations: {
    setUserInfo(state: userState, payload: boolean): void {
      console.log('数据请求', payload);
      state.isLogin = payload;
    },
  },
  actions: {
    changeUserInfo({ commit }, payload: { data: boolean }): void {
      console.log('action执行成功');
      setTimeout(function () {
        commit('setUserInfo', false);
      }, 2000);
    },
  },
};
