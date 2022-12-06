<template>
  <div>
    <onboarding-task-card />
    <!-- <router-view /> -->

    <article-card
      v-for="article in allArticles"
      :key="article.id"
      :article="article"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ArticleCard from "./ArticleCard.vue";
import OnboardingTaskCard from "./OnboardingTaskCard.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: { OnboardingTaskCard, ArticleCard },
  setup() {
    const store = useStore();
    const allArticles = computed(() => store.getters.allArticles);
    return { allArticles };
  },
});
</script>

<style scoped></style>
