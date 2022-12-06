import axios from "axios";
import { createStore } from "vuex";

const apiUrl = process.env.API_URL || "https://dev.to/api/";
export default createStore({
  state: {
    allArticles: [],
  },
  getters: {
    allArticles: (state) => state.allArticles,
  },
  mutations: {
    allArticles: (state, data) => {
      state.allArticles = state.allArticles.concat(data);
    },
  },
  actions: {
    async getAllArticles({ commit }, page = 1) {
      try {
        const response = await axios.get(`${apiUrl}articles?page=${page}`);
        console.log(response.data);
        commit("allArticles", response.data);
        return true;
      } catch (e) {
        return false;
      }
    },
  },
  modules: {},
});
