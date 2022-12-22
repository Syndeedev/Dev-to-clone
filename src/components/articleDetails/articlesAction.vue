<template>
  <div>
    <div class="crayons-article-actions print-hidden mt-12">
      <div
        class="crayons-article-actions__inner flex flex-col justify-start items-center gap-7"
      >
        <button
          id="reaction-butt-like"
          aria-label="Like"
          aria-pressed="false"
          class="crayons-reaction crayons-reaction--like crayons-tooltip__activator relative activated"
          data-category="like"
        >
          <span class="crayons-reaction__icon crayons-reaction__icon--inactive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="crayons-icon"
            >
              <path
                d="M21.179 12.794l.013.014L12 22l-9.192-9.192.013-.014A6.5 6.5 0 0112 3.64a6.5 6.5 0 019.179 9.154zM4.575 5.383a4.5 4.5 0 000 6.364L12 19.172l7.425-7.425a4.5 4.5 0 10-6.364-6.364L8.818 9.626 7.404 8.21l3.162-3.162a4.5 4.5 0 00-5.99.334l-.001.001z"
              ></path>
            </svg>
          </span>
          <!-- <span class="crayons-reaction__icon crayons-reaction__icon--active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="crayons-icon"
            >
              <path
                d="M2.821 12.794a6.5 6.5 0 017.413-10.24h-.002L5.99 6.798l1.414 1.414 4.242-4.242a6.5 6.5 0 019.193 9.192L12 22l-9.192-9.192.013-.014z"
              ></path>
            </svg>
          </span> -->
          <span class="crayons-reaction__count" id="reaction-number-like">{{
            selectedArticle.positive_reactions_count
          }}</span>

          <!-- <span data-testid="tooltip" class="crayons-tooltip__content">
            Like
          </span> -->
        </button>

        <button
          id="reaction-butt-comment"
          aria-label="Jump to Comments"
          aria-pressed="false"
          class="crayons-reaction crayons-reaction--comment crayons-tooltip__activator relative"
          data-category="comment"
        >
          <span class="crayons-reaction__icon crayons-reaction__icon--inactive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="crayons-icon"
            >
              <path
                d="M10 3h4a8 8 0 010 16v3.5c-5-2-12-5-12-11.5a8 8 0 018-8zm2 14h2a6 6 0 000-12h-4a6 6 0 00-6 6c0 3.61 2.462 5.966 8 8.48V17z"
              ></path>
            </svg>
          </span>
          <span class="crayons-reaction__count" id="reaction-number-comment">{{
            selectedArticle.comments_count
          }}</span>

          <!-- <span data-testid="tooltip" class="crayons-tooltip__content">
            Jump to Comments
          </span> -->
        </button>

        <button
          id="reaction-butt-readinglist"
          aria-label="Add to reading list"
          aria-pressed="false"
          class="crayons-reaction crayons-reaction--readinglist crayons-tooltip__activator relative activated"
          data-category="readinglist"
        >
          <span class="crayons-reaction__icon crayons-reaction__icon--inactive">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="crayons-icon"
            >
              <path
                d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1zm13 2H6v15.432l6-3.761 6 3.761V4z"
              ></path>
            </svg>
          </span>
          <!-- <span class="crayons-reaction__icon crayons-reaction__icon--active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              role="img"
              aria-hidden="true"
              class="crayons-icon"
            >
              <path
                d="M5 2h14a1 1 0 011 1v19.143a.5.5 0 01-.766.424L12 18.03l-7.234 4.536A.5.5 0 014 22.143V3a1 1 0 011-1z"
              ></path>
            </svg>
          </span> -->
          <span
            class="crayons-reaction__count"
            id="reaction-number-readinglist"
            >{{ selectedArticle.public_reactions_count }}</span
          >

          <!-- <span data-testid="tooltip" class="crayons-tooltip__content">
            Save
          </span> -->
        </button>

        <div
          id="mod-actions-menu-btn-area"
          class="print-hidden hidden align-center"
        ></div>
        <div class="align-center relative">
          <button
            id="article-show-more-button"
            aria-controls="article-show-more-dropdown"
            aria-expanded="false"
            aria-haspopup="true"
            class="dropbtn p-2 crayons-btn crayons-btn--ghost-dimmed crayons-btn--icon-rounded hover:bg-gray-300 hover:rounded-full hover:p-2"
            aria-label="Share post options"
            data-initialized="true"
            @click="showMoreDropdown"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              role="img"
              aria-labelledby="acz6ov58zx4mtcsukvgg5gxwjijai8va"
              aria-hidden="true"
              class="crayons-icon dropdown-icon"
            >
              <title id="acz6ov58zx4mtcsukvgg5gxwjijai8va">More...</title>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 12a2 2 0 11-4 0 2 2 0 014 0zm7 0a2 2 0 11-4 0 2 2 0 014 0zm5 2a2 2 0 100-4 2 2 0 000 4z"
              ></path>
            </svg>
          </button>

          <div
            v-if="showdropdown"
            id="article-show-more-dropdown w-full"
            class="crayons-dropdown w-64 bg-white p-6 side-bar absolute border border-gray-300 rounded-lg top-[-10px] left-14"
          >
            <div>
              <button
                id="copy-post-url-button"
                class="flex justify-between w-full group mb-3"
                data-posturl="https://dev.to/codepo8/code-brushes-for-github-copilot-4hij"
                @click="copyUrl"
              >
                <span
                  class="fw-bold font-bold text-gray-800 group-hover:text-blue-700"
                  >Copy link</span
                >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="article-copy-icon"
                  role="img"
                  aria-labelledby="an2nwnsbgdootgdggvgaga9lmm1ko3dq"
                  aria-hidden="true"
                  class="crayons-icon mx-2 shrink-0 group-hover:bg-[#EBECFC] group-hover:p-px group-hover:rounded-lg"
                >
                  <title id="an2nwnsbgdootgdggvgaga9lmm1ko3dq">Copy link</title>
                  <path
                    d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"
                  ></path>
                </svg>
              </button>
              <div
                v-if="copy"
                id="article-copy-link-announcer"
                aria-live="polite"
                class="bg-[#EAF4F0] text-gray-900 rounded-lg text-center crayons-notice--success my-2 p-1"
              >
                Copied to Clipboard
              </div>
            </div>

            <div class="Desktop-only flex flex-col justify-center">
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="#"
              >
                Share to Twitter
              </a>
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="#"
              >
                Share to LinkedIn
              </a>
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="#"
              >
                Share to Reddit
              </a>
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="#"
              >
                Share to Hacker News
              </a>
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="#"
              >
                Share to Facebook
              </a>
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="#"
              >
                Share to Mastodon
              </a>
            </div>

            <!-- <web-share-wrapper
              shareurl="https://dev.to/codepo8/code-brushes-for-github-copilot-4hij"
              sharetitle="Code brushes for GitHub Copilot"
              sharetext="Github Next now showed a new feature in GitHub Copilot labs that allows you to change code you write to make it cleaner and safer "
              template="web-share-button"
            >
            </web-share-wrapper> -->
            <template id="web-share-button">
              <a
                href="#"
                class="dropdown-link-row crayons-link crayons-link--block"
                >Share Post via...</a
              >
            </template>
            <div class="w-full">
              <a
                href="/report-abuse"
                class="crayons-link crayons-link--block p-2 w-full hover:bg-[#ebecfc] hover:rounded-lg hover:text-[#2f3ab1]"
                >Report Abuse</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { computed } from "vue";
import { useStore } from "vuex";
import useClipboard from "vue-clipboard3";

export default defineComponent({
  setup() {
    const store = useStore();
    const selectedArticle = computed(() => store.getters.selectedArticle);
    const showdropdown = ref(false);
    const copy = ref(false);
    const showMoreDropdown = () => {
      showdropdown.value = !showdropdown.value;
    };

    const { toClipboard } = useClipboard();

    const copyUrl = async () => {
      try {
        const url = window.location.href;
        await toClipboard(url);
        copy.value = true;
      } catch (e) {
        copy.value = false;
        console.error(e);
      }
    };

    return {
      copy,
      copyUrl,
      showdropdown,
      showMoreDropdown,
      selectedArticle,
    };
  },
});
</script>
<style lang="scss" scoped>
.Desktop-only a {
  padding: 8px;
}
.Desktop-only a:hover {
  background: #ebecfc;
  color: #2f3ab1;
  border-radius: 8px;
}
</style>
