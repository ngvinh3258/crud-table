import { deletes, getAll, getAPost, update } from "@/service";
import Vue from "vue";
import VueX from "vuex";

Vue.use(VueX);
export default new VueX.Store({
  state: {
    posts: [],
    aPost: {},
  },
  getters: {
    posts: (state) => state.posts,
    aPost: (state) => state.aPost,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    deletePost(state, post) {
      state.posts = state.posts.filter((e) => e.id !== post);
    },
    setAPost(state, post) {
      state.aPost = post;
    },
  },
  actions: {
    getPostFromAPI({ commit }) {
      getAll().then((res) => {
        // console.log("res", res);
        commit("setPosts", res.data.slice(0, 5));
      });
    },
    async deletePostFromAPI({ commit }, id) {
      await deletes(id);
      commit("deletePost", id);
    },

    editAPostFromAPI({ commit }, data) {
      update(data);
      commit("editAPost", data);
    },
    getAPostFromApi({ commit }, id) {
      getAPost(id).then((res) => {
        console.log("res1", res);
        commit("setAPost", res.data);
      });
    },
    // getProvinceGG({ commit }) {
    //   axios
    //     .get("https://provinces.open-api.vn/api/?depth=1")
    //     .then((response) => {
    //       let data = {};
    //       response.data.forEach((e) => {
    //         data[e.codename] = e.name.replace(/(Thành phố )|(Tỉnh )/i, "");
    //       });
    //       commit("setProvinces", data);
    //     });
    // },
  },
});
