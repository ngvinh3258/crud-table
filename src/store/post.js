import { add, deletes, getAll, update } from "@/service";

const state = {
  posts: [],
};
const getters = {
  posts: (state) => state.posts,
};
const mutations = {
  setPosts(state, posts) {
    state.posts = posts;
  },
  deletePost(state, post) {
    state.posts = state.posts.filter((e) => e.id !== post);
  },
  updatePost(state, post) {
    state.posts = state.posts.map((p) => {
      if (p.id === post.id) {
        return post;
      } else {
        return p;
      }
    });
  },
  addPost(state, post) {
    state.posts.push(post);
  },
};
const actions = {
  getPostFromAPI({ commit }) {
    getAll().then((res) => {
      commit("setPosts", res.data.slice(0, 5));
    });
  },
  async deletePostFromAPI({ commit }, id) {
    await deletes(id);
    commit("deletePost", id);
  },
  edistAPostFromAPI({ commit }, data) {
    update({ ...data, id: 1 });
    commit("updatePost", data);
  },
  async addNewPost({ commit }, data) {
    const res = await add(data);
    commit("addPost", { ...res.data, id: data.id });
  },
};
export default {
  state,
  getters,
  mutations,
  actions,
};
