<template>
  <div class="bg-white border border-gray-50 p-3 rounded-md">
    <div class="article__body p-5">
      <div class="article__top flex items-center mb-3">
        <div class="article__author-pic">
          <a href="/dailydevtips1"
            ><img
              :src="article.user.profile_image"
              alt="author pic "
              class="rounded-full w-10 h-10 mr-2 border border-gray-400"
              loading="lazy"
          /></a>
        </div>
        <div class="flex flex-col">
          <a href="#" class="text-sm">
            {{ article.user.name }}
          </a>
          <a href="#" class="text-xs"><time>Dec 2 (6 hours ago)</time> </a>
        </div>
      </div>

      <div class="pl-10">
        <h3 class="article__title">
          <a
            href="/dailydevtips1/10-games-to-learn-javascript-155j"
            id="article-link-1281303"
            ><span class="text-3xl font-semibold hover:text-blue-700">{{
              article.title
            }}</span>
          </a>
        </h3>
        <div class="my-2">
          <a class="article__hash_tag" href="/t/javascript">
            <span>#</span>javascript
          </a>
          <a class="article__hash_tag" href="/t/webdev">
            <span>#</span>webdev
          </a>
          <a class="article__hash_tag" href="/t/beginners">
            <span>#</span>beginners
          </a>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <a
              class="article__btn flex items-center py-1 pl-2 pr-3 hover:bg-gray-100"
              href="#"
            >
              <svg
                class="article-icon"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.884 12.595l.01.011L12 19.5l-6.894-6.894.01-.01A4.875 4.875 0 0112 5.73a4.875 4.875 0 016.884 6.865zM6.431 7.037a3.375 3.375 0 000 4.773L12 17.38l5.569-5.569a3.375 3.375 0 10-4.773-4.773L9.613 10.22l-1.06-1.062 2.371-2.372a3.375 3.375 0 00-4.492.25v.001z"
                ></path>
              </svg>
              <span class="text-sm" title="Number of reactions"
                >14<span class="hidden sm:inline">&nbsp;Reactions</span></span
              >
            </a>
            <a
              class="article__btn flex items-center py-1 pl-2 pr-3 hover:bg-gray-100"
              href="#"
              aria-label="Add a comment to post - 10 games to learn JavaScript"
            >
              <svg
                class="article-icon"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z"
                ></path>
              </svg>
              <span class="text-sm" title="Number of comments"
                >1<span class="hidden sm:inline">&nbsp;Comment</span></span
              ></a
            >
          </div>
          <div class="flex items-center">
            <small class="mr-2 text--gray-700 text-xs"
              >{{ article.reading_time_minutes }}
              {{ article.reading_time_minutes > 1 ? "mins" : "min" }}
              read</small
            ><button
              type="button"
              class="c-btn c-btn--icon-alone"
              id="article-save-button-1281303"
              title="Save post 10 games to learn JavaScript to reading list"
              aria-label="Save post 10 games to learn JavaScript to reading list"
              aria-pressed="false"
              data-initial-feed="true"
              data-reactable-id="1281303"
            >
              <svg
                class="article-icon c-btn__icon"
                aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z"
                ></path>
              </svg>
            </button>
            <!-- Saved Button -->
            <!-- <button
              type="button"
              class="c-btn c-btn--icon-alone"
              id="article-save-button-1282884"
              title="Save post Thank You DEV 😊 to reading list"
              aria-label="Save post Thank You DEV 😊 to reading list"
              aria-pressed="true"
              data-initial-feed="true"
              data-reactable-id="1282884"
            >
              <svg
                class="crayons-icon c-btn__icon"
                aria-hidden="true"
                focusable="false"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.75 4.5h10.5a.75.75 0 0 1 .75.75v14.357a.375.375 0 0 1-.575.318L12 16.523l-5.426 3.401A.375.375 0 0 1 6 19.607V5.25a.75.75 0 0 1 .75-.75z"
                ></path>
              </svg>
            </button> -->
          </div>
        </div>
      </div>
    </div>
    <div class="article__comments bg-gray-70 px-3 py-4 rounded-md">
      <div class="article__comment cursor-pointer" role="presentation">
        <div class="article__comment-top flex items-center">
          <a href="#" class="flex items-center text-sm"
            ><span class="article__comment-avatar mr-2"
              ><img
                src="https://res.cloudinary.com/practicaldev/image/fetch/s--VP9jxpwM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/495014/9ebab45e-599d-4d92-bb2b-e8a2dfbf8d3a.jpg"
                class="w-6 h-6 rounded-full border border-gray-400"
                alt="{comment.username} avatar"
              /> </span
            >Jatin Sharma
          </a>
          <a href="#" class="text-gray-700 text-sm ml-1"
            ><time>2 days ago</time>
          </a>
        </div>
        <div class="article__comment__body text-lg text-gray-900 my-4 px-3">
          <p>
            Hey, quick question - I got the same mail but it doesn't have any
            code for the "free" gift 🤔
          </p>
        </div>
      </div>
      <div class="article__comments__actions">
        <a
          class="article__comments-btn rounded-md text-gray-600 text-sm p-3 hover:bg-gray-100"
          href="/krishnaagarwal/thank-you-dev-3pfo#comments-container"
          data-testid="see-all-comments"
          >See all 27 comments</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  //   setup() {
  //   },
});
</script>

<style scoped></style>
