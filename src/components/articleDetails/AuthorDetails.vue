<template>
  <aside class="crayons-layout__sidebar-right" aria-label="Author details">
    <card-loader v-if="!Object.keys(authorDetails).length" />
    <div
      v-else
      class="crayons-article-sticky grid gap-4 break-word"
      id="article-show-primary-sticky-nav"
    >
      <div
        class="crayons-card crayons-card--secondary branded-7 border-t-[#280331] border-t-[32px] p-4 rounded-lg"
      >
        <div class="-mt-8">
          <a :href="`/${authorDetails?.username}`" class="flex">
            <span class="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
              <img
                :src="authorDetails?.profile_image"
                class="crayons-avatar__image rounded-full w-12 h-12"
                alt=""
                loading="lazy"
              />
            </span>
            <span
              class="crayons-link crayons-subtitle-2 mt-5 text-xl font-semibold"
              >{{ authorDetails?.name }}</span
            >
          </a>
        </div>

        <div class="print-hidden my-4">
          <button
            name="button"
            type="button"
            class="crayons-btn follow-action-button whitespace-nowrap w-100 follow-user showing bg-blue-700 w-full text-white rounded-lg py-2"
            aria-label="Follow user: Christian Heilmann"
            aria-pressed="false"
            data-fetched="fetched"
            data-verb="unfollow"
          >
            Follow
          </button>
        </div>
        <div class="color-base-70 mb-4 text-[#575757]">
          {{ authorDetails?.summary }}
        </div>

        <div class="user-metadata-details">
          <ul class="user-metadata-details-inner">
            <li v-if="authorDetails.location" class="mb-3">
              <div class="key text-gray-700 text-xs uppercase font-semibold">
                Location
              </div>
              <div class="value text-gray-800">
                {{ authorDetails.location }}
              </div>
            </li>
            <li v-if="authorDetails.work" class="mb-3">
              <div class="key text-gray-700 text-xs uppercase font-semibold">
                Work
              </div>
              <div class="value text-gray-800">
                Principal Program Manager at Microsoft
              </div>
            </li>
            <li v-if="authorDetails.joined_at" class="mb-3">
              <div class="key text-gray-700 text-xs uppercase font-semibold">
                Joined
              </div>
              <div class="value text-gray-800">
                <time datetime="2018-10-29T16:23:00Z" class="date">{{
                  authorDetails.joined_at
                }}</time>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="crayons-card crayons-card--secondary pt-4">
        <header class="crayons-card__header px-4 pb-4">
          <h4 class="font-semibold text-xl">
            More from
            <a class="text-blue-700" :href="`/${authorDetails?.username}`">{{
              authorDetails?.name
            }}</a>
          </h4>
        </header>
        <div
          v-for="item in authorArticles"
          :key="item.id"
          class="py-3 hover:bg-white px-4 border-t hover:rounded-bl-lg hover:rounded-br-lg"
        >
          <a :href="`/${item.user.username}/${item.slug}`">
            <h4>{{ item.title }}</h4>
            <div class="my-2 flex items-center">
              <p
                v-for="tag in item.tag_list"
                :key="tag"
                class="px-2 text-sm text-[#717171]"
              >
                <span>#</span>{{ tag }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import cardLoader from "./cardLoader.vue";

export default defineComponent({
  components: { cardLoader },
  setup() {
    const store = useStore();

    const authorDetails = computed(() => store.getters.authorDetails);
    const authorArticles = computed(() => store.getters.authorArticles);
    return { authorDetails, authorArticles };
  },
});
</script>

<style scoped>
.crayons-card {
  background: #fafafa;
  color: #404040;
  box-shadow: 0 0 0 1px rgb(23, 23, 23, 0.05);
  border-radius: 0.375rem;
}
</style>
