<template>
  <card-loader v-if="!Object.keys(selectedArticle).length" />
  <div v-else class="bg-white border border-gray-300 mb-2 rounded-lg">
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
          class="article__title mt-6 text-5xl text-black font-extrabold max-w-2xl leading-[3.5rem]"
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
    <div v-if="selectedArticleComments" class="px-16 py-8 all_comments">
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <h2 class="text-2xl text-[#242424] font-bold">
            Top Comments ({{ selectedArticleComments.length }})
          </h2>
          <div class="relative">
            <button
              class="c-btn c-btn--ghost crayons-btn--icon-left"
              id="toggle-comments-sort-dropdown"
              aria-controls="comments-sort-dropdown-container"
              aria-expanded="true"
              aria-label="Sort comments"
              aria-haspopup="true"
              data-initialized="true"
              @click="showMoreDropdown"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                aria-hidden="true"
                class="mt-2"
              >
                <title>Crown</title>
                <path
                  d="M12 18l-4-3.771 1-.943 3 2.829 3-2.829 1 .943L12 18zm0-10.115l-3 2.829-1-.943L12 6l4 3.771-1 .942-3-2.828z"
                ></path>
              </svg>
            </button>

            <nav
              v-if="showdropdown"
              class="crayons-dropdown z-10 top-12 left-[-230px] absolute w-80 bg-white p-3 side-bar border border-gray-300 rounded-lg"
              id="comments-sort-dropdown-container"
              aria-labelledby="comments-sort-title"
              style="display: block"
            >
              <h3 id="comments-sort-title" class="mb-3 font-bold text-lg">
                Sort discussion:
              </h3>
              <ul class="comments-sort-dropdown__list">
                <li class="comment-sort-option">
                  <a
                    href="#"
                    class="comment-sort-option__header pl-7 pb-0 crayons-link--block block"
                    aria-describedby="top-description-text"
                    aria-current="page"
                  >
                    <div class="flex items-center">
                      <!-- <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        role="img"
                        aria-labelledby="a7urjp157zhid3sirkpovdsyc67l6tn8"
                        aria-hidden="true"
                        class="crayons-icon"
                      >
                        <title id="a7urjp157zhid3sirkpovdsyc67l6tn8">
                          Selected Sort Option
                        </title>
                        <path
                          d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414 4.95 4.95z"
                        ></path>
                      </svg> -->

                      <h4>Top</h4>
                    </div>
                    <div
                      id="top-description-text"
                      class="crayons-field__description"
                    >
                      Most upvoted and relevant comments will be first
                    </div>
                  </a>
                </li>

                <li class="comment-sort-option">
                  <a
                    href="#"
                    class="comment-sort-option__header pl-7 pb-0 crayons-link--block block"
                    aria-describedby="latest-description-text"
                  >
                    <h4>Latest</h4>
                    <div
                      id="latest-description-text"
                      class="crayons-field__description"
                    >
                      Most recent comments will be first
                    </div>
                  </a>
                </li>

                <li class="comment-sort-option">
                  <a
                    href="#"
                    class="comment-sort-option__header pl-7 pb-0 crayons-link--block block"
                    aria-describedby="oldest-description-text"
                  >
                    <h4>Oldest</h4>
                    <div
                      id="oldest-description-text"
                      class="crayons-field__description"
                    >
                      The oldest comments will be first
                    </div>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

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
      <div class="text-sm text-[#717171] text-center py-4">
        <span>Code of Conduct </span>
        <span class="mx-2">•</span>
        <span> Report abuse </span>
      </div>
    </div>
  </div>
  <!-- READ NEXT -->
  <card-loader
    class="mt-10"
    v-if="!Object.keys(allPostsExceptSelected).length"
  />
  <div v-else class="bg-white border border-gray-300 mb-2 pb-8 rounded-lg">
    <div class="mb-3 px-16 pt-8">
      <h4 class="font-semibold text-2xl">Read next</h4>

      <div
        class="pt-6 group"
        v-for="item in allPostsExceptSelected"
        :key="item.id"
      >
        <a :href="`/${item.user?.username}/${item.slug}`">
          <div class="article__top">
            <div class="flex items-center">
              <div class="article__author-pic">
                <img
                  :src="item.user?.profile_image"
                  alt="author pic "
                  class="rounded-full w-16 h-16 mr-2 border border-gray-400"
                  loading="lazy"
                />
              </div>
              <div class="flex flex-col ml-2">
                <span class="text-xl font-semibold group-hover:text-blue-700">
                  {{ item.title }}
                </span>
                <div
                  class="text-base pt-1 text-gray-500 group-hover:text-blue-700"
                >
                  <span>
                    {{ item.user?.name }}
                  </span>
                  <span class="group-hover:text-blue-700">
                    -
                    <time>{{ item.readable_publish_date }} </time>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
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
import CardLoader from "./cardLoader.vue";
export default defineComponent({
  components: {
    QuillEditor,
    CardLoader,
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
    const showdropdown = ref(false);
    const showMoreDropdown = () => {
      showdropdown.value = !showdropdown.value;
    };
    const allArticles = computed(() => store.getters.allArticles);
    const page = ref(0);
    const getAllArticles = () => {
      store.dispatch("getAllArticles", ++page.value);
    };
    const allPostsExceptSelected = computed(() => {
      if (allArticles.value.length == 0) {
        getAllArticles();
      }

      return allArticles.value
        .filter((article: any) => article.slug !== selectedArticle.value.slug)
        .sort(() => Math.random() - Math.random())
        .slice(0, 4);
    });
    return {
      selectedArticle,
      selectedArticleComments,
      allPostsExceptSelected,
      showMoreDropdown,
      showdropdown,
      content,
      date,
    };
  },
});
</script>

<style lang="scss" scoped>
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
.comment-sort-option {
  margin-top: 10px;
  padding: 4px 0;
  :hover {
    background: #ebecfc;
    border-radius: 10px;
  }
  h4 {
    color: #242424;
    font-size: 16px;
    font-weight: 500;
  }
}
.crayons-field__description {
  color: #525252;
  font-size: 14px;
}
</style>
