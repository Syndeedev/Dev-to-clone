<template>
  <div class="w-full">
    <div
      class="m-auto max-w-7xl grid gap-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-12 p-4"
    >
      <div class="sidebar-wrapper-left hidden md:block">
        <articles-action />
      </div>
      <main class="main-content col-span-1 md:col-span-3 lg:col-span-8">
        <selected-article />
      </main>
      <div class="sidebar-wrapper-right hidden lg:block lg:col-span-3">
        <author-details />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import SelectedArticle from "./SelectedArticle.vue";
import ArticlesAction from "./articlesAction.vue";
import AuthorDetails from "./AuthorDetails.vue";
// import { ref } from "vue";

export default defineComponent({
  components: { SelectedArticle, ArticlesAction, AuthorDetails },
  setup() {
    const store = useStore();
    const route = useRoute();
    const username = route.params.username;
    const slug = route.params.slug;

    const getArticleById = () => {
      store.dispatch("getArticleById", { username, slug });
    };
    getArticleById();

    const getAllAuthorArticles = () => {
      store.dispatch("getAllAuthorArticles", username);
    };
    getAllAuthorArticles();
    return {
      getArticleById,
    };
  },
});
</script>

<style lang="scss" scoped></style>
