import Vue from "vue";
import Vuex from "vuex";
import post from "./post";
import input from "./input";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  modules: {
    post,
    input,
  },  
});

export default store;
