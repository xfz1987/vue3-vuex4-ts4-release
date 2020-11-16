const state = {
  title: 'hello',
};

export type detailState = typeof state;

export default {
  namespaced: true,
  state,
  getters: {
    detailInfo: (state: detailState): string => `🏮${state.title}` + Math.random(),
  },
  mutations: {
    setTitle(state: detailState, payload: string): void {
      state.title = payload;
    },
  },
  actions: {
    changeTitle({ commit }): void {
      console.log('action执行成功');
      setTimeout(function () {
        commit('setTitle', '详情页');
      }, 2000);
    },
  },
};
