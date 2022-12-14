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
          <span class="crayons-reaction__count" id="reaction-number-like"
            >8</span
          >

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
          <span class="crayons-reaction__count" id="reaction-number-comment"
            >4</span
          >

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
          <span class="crayons-reaction__count" id="reaction-number-readinglist"
            >4</span
          >

          <!-- <span data-testid="tooltip" class="crayons-tooltip__content">
            Save
          </span> -->
        </button>

        <div
          id="mod-actions-menu-btn-area"
          class="print-hidden hidden align-center"
        ></div>
        <div class="align-center m:relative">
          <button
            id="article-show-more-button"
            aria-controls="article-show-more-dropdown"
            aria-expanded="false"
            aria-haspopup="true"
            class="dropbtn crayons-btn crayons-btn--ghost-dimmed crayons-btn--icon-rounded"
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
            id="article-show-more-dropdown"
            class="crayons-dropdown side-bar left-2 right-2 m:right-auto m:left-100 s:left-auto mb-1 m:mb-0 top-unset bottom-100 m:top-0 m:bottom-unset"
          >
            <div>
              <button
                id="copy-post-url-button"
                class="flex justify-between crayons-link crayons-link--block w-100 bg-transparent border-0"
                data-posturl="https://dev.to/codepo8/code-brushes-for-github-copilot-4hij"
              >
                <span class="fw-bold">Copy link</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  id="article-copy-icon"
                  role="img"
                  aria-labelledby="an2nwnsbgdootgdggvgaga9lmm1ko3dq"
                  aria-hidden="true"
                  class="crayons-icon mx-2 shrink-0"
                >
                  <title id="an2nwnsbgdootgdggvgaga9lmm1ko3dq">Copy link</title>
                  <path
                    d="M7 6V3a1 1 0 011-1h12a1 1 0 011 1v14a1 1 0 01-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1 1 0 013 21l.003-14c0-.552.45-1 1.007-1H7zm2 0h8v10h2V4H9v2zm-2 5v2h6v-2H7zm0 4v2h6v-2H7z"
                  ></path>
                </svg>
              </button>
              <div
                id="article-copy-link-announcer"
                aria-live="polite"
                class="crayons-notice crayons-notice--success my-2 p-1"
              >
                Copied to Clipboard
              </div>
            </div>

            <div class="Desktop-only">
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="https://twitter.com/intent/tweet?text=%22Code%20brushes%20for%20GitHub%20Copilot%22%20by%20%40codepo8%20%23DEVCommunity%20https%3A%2F%2Fdev.to%2Fcodepo8%2Fcode-brushes-for-github-copilot-4hij"
              >
                Share to Twitter
              </a>
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fdev.to%2Fcodepo8%2Fcode-brushes-for-github-copilot-4hij&amp;title=Code%20brushes%20for%20GitHub%20Copilot&amp;summary=Github%20Next%20now%20showed%20a%20new%20feature%20in%20GitHub%20Copilot%20labs%20that%20allows%20you%20to%20change%20code%20you%20write%20to%20make%20it%20cleaner%20and%20safer%20&amp;source=DEV%20Community%20%F0%9F%91%A9%E2%80%8D%F0%9F%92%BB%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB"
              >
                Share to LinkedIn
              </a>
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="https://www.reddit.com/submit?url=https%3A%2F%2Fdev.to%2Fcodepo8%2Fcode-brushes-for-github-copilot-4hij&amp;title=Code%20brushes%20for%20GitHub%20Copilot"
              >
                Share to Reddit
              </a>
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="https://news.ycombinator.com/submitlink?u=https%3A%2F%2Fdev.to%2Fcodepo8%2Fcode-brushes-for-github-copilot-4hij&amp;t=Code%20brushes%20for%20GitHub%20Copilot"
              >
                Share to Hacker News
              </a>
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdev.to%2Fcodepo8%2Fcode-brushes-for-github-copilot-4hij"
              >
                Share to Facebook
              </a>
              <a
                target="_blank"
                class="crayons-link crayons-link--block"
                rel="noopener"
                href="https://toot.kytta.dev/?text=https%3A%2F%2Fdev.to%2Fcodepo8%2Fcode-brushes-for-github-copilot-4hij"
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

            <a href="/report-abuse" class="crayons-link crayons-link--block"
              >Report Abuse</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const showdropdown = ref(false);
    const showMoreDropdown = () => {
      showdropdown.value = !showdropdown.value;
    };
    return {
      showdropdown,
      showMoreDropdown,
    };
  },
});
</script>

<style scoped></style>
