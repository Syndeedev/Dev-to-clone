<template>
  <div :class="closeCard ? 'hidden' : 'flex'">
    <div
      class="onboarding-task-card bg-blue-700 rounded-md p-9 mb-6 relative"
      role="dialog"
      aria-labelledby="task-card-title"
      aria-describedby="task-card-subtitle"
      style="display: block"
    >
      <button
        class="absolute top-6 right-6"
        @click="closeTaskCard"
        aria-label="Close Welcome Message"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.99974 5.58623L11.9497 0.63623L13.3637 2.05023L8.41374 7.00023L13.3637 11.9502L11.9497 13.3642L6.99974 8.41423L2.04974 13.3642L0.635742 11.9502L5.58574 7.00023L0.635742 2.05023L2.04974 0.63623L6.99974 5.58623Z"
            fill="white"
          ></path>
        </svg>
      </button>

      <div>
        <img
          alt="onboarding task card image"
          class="task-card-image w-24 h-24"
          src="https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png"
          loading="lazy"
        />
      </div>

      <h2 class="text-4xl text-white font-extrabold my-2" id="task-card-title">
        You're now a part of the community!
      </h2>
      <p id="task-card-subtitle" class="text-sm text-white uppercase">
        SUGGESTED THINGS YOU CAN DO
      </p>
      <ul class="task-card-actions">
        <li
          class="flex items-center p-5 mt-4 bg-white rounded-md bg-opacity-20 hover:bg-opacity-30"
        >
          <a
            class="task-card-link w-full flex items-center justify-between"
            href="/welcome"
          >
            <p class="text-base text-white font-bold">
              <span class="emoji mr-2">😊</span>Join the Welcome thread
            </p>
            <svg
              width="8"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.172 7L.222 2.05 1.636.636 8 7l-6.364 6.364L.222 11.95 5.172 7z"
                fill="#fff"
              ></path>
            </svg>
          </a>
        </li>

        <li
          class="flex items-center p-5 mt-4 bg-white rounded-md bg-opacity-20 hover:bg-opacity-30"
        >
          <a
            class="task-card-link w-full flex items-center justify-between"
            href="/new"
          >
            <p class="text-base text-white font-bold">
              <span class="emoji mr-2">✍🏾</span>Write your first DEV Community
              👩‍💻👨‍💻 post
            </p>
            <svg
              width="8"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.172 7L.222 2.05 1.636.636 8 7l-6.364 6.364L.222 11.95 5.172 7z"
                fill="#fff"
              ></path>
            </svg>
          </a>
        </li>
        <li
          class="flex items-center p-5 mt-4 bg-white rounded-md bg-opacity-20 hover:bg-opacity-30"
        >
          <a
            class="task-card-link w-full flex items-center justify-between"
            href="/settings"
          >
            <p class="text-base text-white font-bold">
              <span class="emoji mr-2">💅🏼</span>Customize your profile
            </p>
            <svg
              width="8"
              height="14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.172 7L.222 2.05 1.636.636 8 7l-6.364 6.364L.222 11.95 5.172 7z"
                fill="#fff"
              ></path>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const closeCard = ref(false);
    const closeTaskCard = () => {
      closeCard.value = !closeCard.value;
    };
    return { closeCard, closeTaskCard };
  },
});
</script>

<style scoped></style>
