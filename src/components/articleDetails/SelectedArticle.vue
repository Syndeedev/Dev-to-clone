<template>
  <div class="bg-white border border-gray-300 cursor-pointer mb-2 rounded-lg">
    <div>
      <img
        :src="selectedArticle.cover_image"
        :alt="selectedArticle.title"
        class="rounded-tr-lg rounded-tl-lg"
      />
      <div class="article__top mb-3 px-16 pt-8">
        <div class="flex items-center">
          <div class="article__author-pic">
            <a :href="`/${selectedArticle.user?.username}`"
              ><img
                :src="selectedArticle.user?.profile_image"
                alt="author pic "
                class="rounded-full w-10 h-10 mr-2 border border-gray-400"
                loading="lazy"
            /></a>
          </div>
          <div class="flex flex-col">
            <a :href="`/${selectedArticle.user?.username}`" class="text-sm">
              {{ selectedArticle.user?.name }}
            </a>
            <a
              :href="`/${selectedArticle.user?.username}/${selectedArticle.slug}`"
              class="text-xs"
              >Posted on
              <time
                >{{ selectedArticle.readable_publish_date }}
                <!-- ({{dateTime(selectedArticle.created_at)}}) -->
              </time>
            </a>
          </div>
        </div>

        <h3 class="article__title mt-6">
          <a
            :href="`/${selectedArticle?.user?.username}/${selectedArticle.slug}`"
            id="article-link-1281303"
            ><span class="text-3xl font-semibold hover:text-blue-700">{{
              selectedArticle.title
            }}</span>
          </a>
        </h3>
        <div class="my-2 flex items-center">
          <a
            v-for="tag in selectedArticle.tags"
            :key="tag"
            class="article__hash_tag"
            :href="`/t/${tag}`"
          >
            <span>#</span>{{ tag }}
          </a>
        </div>
      </div>

      <div
        class="px-16 pt-8 body_html"
        v-html="selectedArticle.body_html"
      ></div>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import ArticleCard from "./ArticleCard.vue";
// import OnboardingTaskCard from "./OnboardingTaskCard.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  setup() {
    const store = useStore();
    const selectedArticle = computed(() => store.getters.selectedArticle);
    return { selectedArticle };
  },
});
</script>

<style>
.body_html p {
  margin-bottom: 20px !important;
}
.body_html .highlight {
  position: relative;
  padding: 8px;
  display: inline-block;
  white-space: pre;
  background-color: #08090a;
  color: #f8f8f2;
}
.body_html .highlight__panel {
  position: absolute;
  top: 0;
}
</style>
