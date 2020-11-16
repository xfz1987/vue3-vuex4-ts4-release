// import { useStore } from 'vuex';
import { defineComponent, computed } from 'vue';
import { useStoreHooks } from '../hooks';
// import { State } from '../store';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
  setup(props) {
    // const { state, getters, dispatch, commit } = useStore<State>();
    const { state, getters, dispatch, commit } = useStoreHooks();
    console.log('🍊', state.user.isLogin); // 🍊 true
    console.log('🍎', state.detail.title); // 🍎 hello
    console.log('🚀', getters['user/loginInfo']); // 🚀 已登陆

    const info1 = computed(() => getters['user/loginInfo']);
    const info2 = computed(() => getters['detail/detailInfo']);

    const logout = () => commit('user/setUserInfo', false); // 数据请求 false

    // dispatch('user/changeUserInfo', true);

    return { info1, info2, logout };
  },
});
