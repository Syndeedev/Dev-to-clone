import axios from "axios";
import { createStore } from "vuex";

const apiUrl = process.env.API_URL || "https://dev.to/api/";
export default createStore({
  state: {
    allArticles: [],
    selectedArticle: {},
    authorDetails: {},
    selectedArticleComments: [],
    authorArticles: [],
  },
  getters: {
    allArticles: (state) => state.allArticles,
    selectedArticle: (state) => state.selectedArticle,
    authorDetails: (state) => state.authorDetails,
    selectedArticleComments: (state) => state.selectedArticleComments,
    authorArticles: (state) => state.authorArticles,
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
    selectedArticle: (state, data) => {
      state.selectedArticle = data;
    },
    authorDetails: (state, data) => {
      state.authorDetails = data;
    },
    selectedArticleComments: (state, data) => {
      state.selectedArticleComments = data;
    },
    allAuthorArticles: (state, data) => {
      state.authorArticles = data
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);
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
    async getArticleById({ commit }, { username, slug }) {
      try {
        const response = await axios.get(
          `${apiUrl}articles/${username}/${slug}`
        );
        commit("selectedArticle", response.data);

        console.log(response.data);
        const authorDetails = await axios.get(
          `${apiUrl}users/${response.data.user.user_id}`
        );

        const selectedArticleComments = await axios.get(
          `${apiUrl}comments?a_id=${response.data.id}`
        );
        commit("authorDetails", authorDetails.data);
        commit("selectedArticleComments", selectedArticleComments.data);
        console.log(authorDetails.data);
        console.log(selectedArticleComments.data);
        return response.data;
      } catch (e) {
        window.location.href = "/";
        return false;
      }
    },
    async getAllAuthorArticles({ commit }, username) {
      try {
        const response = await axios.get(
          `${apiUrl}articles?username=${username}`
        );
        console.log(response.data);
        commit("allAuthorArticles", response.data);
        return response;
      } catch (e) {
        // return false;
      }
    },
  },

  modules: {},
});
