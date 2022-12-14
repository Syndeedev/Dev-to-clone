<template>
  <aside class="crayons-layout__sidebar-right" aria-label="Author details">
    <div
      class="crayons-article-sticky grid gap-4 break-word"
      id="article-show-primary-sticky-nav"
    >
      <div
        class="crayons-card crayons-card--secondary branded-7 border-t-[#280331] border-t-[32px] p-4 rounded-lg"
      >
        <div class="-mt-8">
          <a href="/codepo8" class="flex">
            <span class="crayons-avatar crayons-avatar--xl mr-2 shrink-0">
              <img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--6g52Nrx9--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/110884/c4807448-b7fe-4d8d-ba13-a3ec4c97b377.jpeg"
                class="crayons-avatar__image rounded-full w-12 h-12"
                alt=""
                loading="lazy"
              />
            </span>
            <span class="crayons-link crayons-subtitle-2 mt-5"
              >Christian Heilmann</span
            >
          </a>
        </div>

        <div class="print-hidden mt-4">
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
        <div class="color-base-70">
          Open Web guy at Microsoft and long-time JavaScript user
        </div>

        <div class="user-metadata-details">
          <ul class="user-metadata-details-inner">
            <li>
              <div class="key">Location</div>
              <div class="value">Berlin, Germany</div>
            </li>
            <li>
              <div class="key">Work</div>
              <div class="value">Principal Program Manager at Microsoft</div>
            </li>
            <li>
              <div class="key">Joined</div>
              <div class="value">
                <time datetime="2018-10-29T16:23:00Z" class="date"
                  >Oct 29, 2018</time
                >
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="crayons-card crayons-card--secondary">
        <header class="crayons-card__header">
          <h3 class="crayons-subtitle-2">
            More from <a href="/codepo8">Christian Heilmann</a>
          </h3>
        </header>
        <div>
          <a
            class="crayons-link crayons-link--contentful"
            href="/codepo8/ai-code-completion-is-like-cruise-control-and-thats-great-news-for-bigger-teams-29mn"
          >
            AI Code completion is like cruise control - and that's great news
            for bigger teams
            <div class="crayons-link__secondary -ml-1">
              <span class="mr-1"><span class="opacity-50">#</span>ai</span>
              <span class="mr-1"
                ><span class="opacity-50">#</span>machinlearning</span
              >
              <span class="mr-1"
                ><span class="opacity-50">#</span>codecompletion</span
              >
              <span class="mr-1"><span class="opacity-50">#</span>copilot</span>
            </div>
          </a>
          <a
            class="crayons-link crayons-link--contentful"
            href="/codepo8/quick-tip-embedding-youtube-videos-in-github-pages-4e36"
          >
            Quick tip: embedding YouTube Videos in GitHub pages
            <div class="crayons-link__secondary -ml-1">
              <span class="mr-1"><span class="opacity-50">#</span>github</span>
              <span class="mr-1"><span class="opacity-50">#</span>youtube</span>
            </div>
          </a>
          <a
            class="crayons-link crayons-link--contentful"
            href="/codepo8/github-copilot-explaining-code-and-translating-it-from-one-language-to-another-3i6e"
          >
            GitHub Copilot explaining code and translating it from one language
            to another
            <div class="crayons-link__secondary -ml-1">
              <span class="mr-1"><span class="opacity-50">#</span>github</span>
              <span class="mr-1"><span class="opacity-50">#</span>copilot</span>
              <span class="mr-1"
                ><span class="opacity-50">#</span>machinelearning</span
              >
            </div>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
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
