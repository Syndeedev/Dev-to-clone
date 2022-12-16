<template>
  <div class="bg-white border border-gray-300 mb-2 rounded-lg">
    <div>
      <img
        v-if="selectedArticle.cover_image"
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

        <h3
          class="article__title mt-6 text-5xl text-black font-bold leading-[3.5rem]"
        >
          {{ selectedArticle.title }}
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
    <div v-if="selectedArticleComments" class="px-16 pt-8 all_comments">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl text-[#242424] font-bold">
          Top Comments ({{ selectedArticleComments.length }})
        </h2>
        <button class="px-4 py-2 border-2">Subscribe</button>
      </div>
      <div>
        <QuillEditor theme="snow" placeholder="Add to the discussion" />
        <div class="mb-6 mt-3">
          <button class="px-4 py-2 mx-2 bg-[#EBECFC] rounded-lg">Submit</button>
          <button class="px-4 py-2 mx-2 bg-gray-100 rounded-lg">Preview</button>
        </div>
      </div>
      <div v-for="(comment, index) in selectedArticleComments" :key="index">
        <div>
          <div class="flex">
            <a :href="`/${comment.user?.username}`"
              ><img
                :src="comment.user?.profile_image"
                alt="author pic "
                class="rounded-full w-10 h-10 mr-2 border border-gray-400"
                loading="lazy"
            /></a>
            <div
              class="bg-white border border-gray-300 mb-6 p-3 rounded-lg w-full"
            >
              <div class="flex items-center">
                <span class="text-sm font-semibold">
                  {{ comment.user?.name }}
                </span>
                <div class="mx-2 w-[2px] h-[2px] bg-black rounded-full">.</div>
                <a
                  :href="`/${comment.user.username}/comments/${comment.id_code}`"
                  class="text-gray-700 text-sm"
                  ><time>{{ date(comment.created_at) }}</time>
                </a>
              </div>

              <div class="py-2 ml-2" v-html="comment.body_html"></div>
            </div>
          </div>
          <div v-if="comment.children.length">
            <div v-for="(subComment, index) in comment.children" :key="index">
              <div class="flex ml-7">
                <a :href="`/${subComment.user?.username}`"
                  ><img
                    :src="subComment.user?.profile_image"
                    alt="author pic "
                    class="rounded-full w-10 h-10 mr-2 border border-gray-400"
                    loading="lazy"
                /></a>
                <div
                  class="bg-white border border-gray-300 mb-6 p-3 rounded-lg w-full"
                >
                  <div class="flex items-center">
                    <span class="text-sm font-semibold">
                      {{ subComment.user?.name }}
                    </span>
                    <div class="mx-2 w-[2px] h-[2px] bg-black rounded-full">
                      .
                    </div>
                    <a
                      :href="`/${subComment.user.username}/comments/${subComment.id_code}`"
                      class="text-gray-700 text-sm"
                      ><time>{{ date(subComment.created_at) }}</time>
                    </a>
                  </div>

                  <div class="py-2 ml-2" v-html="subComment.body_html"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { QuillEditor } from "@vueup/vue-quill";
import "@vueup/vue-quill/dist/vue-quill.snow.css";

import moment from "moment";
// import OnboardingTaskCard from "./OnboardingTaskCard.vue";
import { computed, ref } from "vue";
import { useStore } from "vuex";
export default defineComponent({
  components: {
    QuillEditor,
  },
  setup() {
    const store = useStore();
    const content = ref("");
    const selectedArticle = computed(() => store.getters.selectedArticle);
    const selectedArticleComments = computed(
      () => store.getters.selectedArticleComments
    );
    const date = (value: string) => {
      return moment(value).fromNow();
    };
    return { selectedArticle, selectedArticleComments, content, date };
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
