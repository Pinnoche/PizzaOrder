
import { createApp} from 'vue';
import Vuex from 'vuex';

const app = createApp({});

app.use(Vuex);

export default new Vuex.Store({
  state: {
    message: null
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    }
  },
  actions: {
    setMessage(context, message) {
      context.commit('setMessage', message);
    }
  },
  getters: {
    getMessage: state => state.message
  }
});
