import { getAPost } from "@/service";

const state = {
  input: {},
};
const getters = {
  input: (state) => state.input,
};
const mutations = {
  setInput(state, post) {
    state.input = post;
  },
};
const actions = {
  getAPostFromApi({ commit }, id) {
    getAPost(id).then((res) => {
      commit("setInput", res.data);
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
