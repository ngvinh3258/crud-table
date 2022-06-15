const state = {
  input: {},
};
const getters = {
  input: (state) => state.input,
};
const mutations = {
  setInput(state, post) {
    state.input = { ...post };
  },
};
const actions = {};

export default {
  state,
  getters,
  mutations,
  actions,
};
