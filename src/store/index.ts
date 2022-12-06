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
    allCommentsOfAnArticle: (state, data) => {
      state.allArticles.map((article: any) => {
        if (article.id == data.user_id) {
          article.comments = data.comments;
        }
      });
    },
  },
  actions: {
    async getAllArticles({ commit, dispatch }, { page = 1, per_page = 10 }) {
      try {
        const response = await axios.get(
          `${apiUrl}articles?per_page=${per_page}&page=${page}`
        );
        commit("allArticles", response.data);
        response.data.map((article: any) => {
          dispatch("getAllCommentsOfAnArticle", article.id);
        });
        console.log(response.data);
        return response.data;
      } catch (e) {
        return false;
      }
    },
    async getAllCommentsOfAnArticle({ commit }, a_id) {
      try {
        const response = await axios.get(`${apiUrl}comments?a_id=${a_id}`);
        const data = {
          comments: response.data,
          user_id: a_id,
        };
        commit("allCommentsOfAnArticle", data);
        return response;
      } catch (e) {
        // return false;
      }
    },
  },
  modules: {},
});
