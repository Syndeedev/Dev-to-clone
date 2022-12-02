<template>
  <div class="bg-white fixed top-0 w-full z-10 shadow">
    <nav class="m-auto max-w-7xl flex items-center justify-between py-2 px-4">
      <div class="flex items-center justify-between">
        <a href="/" aria-label="DEV Community 👩‍💻👨‍💻 Home">
          <img src="@/assets/devto.svg" alt="DEV Community 👩‍💻👨‍💻" />
        </a>

        <div
          class="flex-1 mx-2 border-2 p-2 rounded-md flex items-center hover:border-[#2F3AB2] hover:border-2"
        >
          <input
            type="text"
            name="q"
            class="outline-none md:w-80"
            placeholder="Search..."
            autocomplete="off"
            aria-label="Search term"
          />
          <button type="submit" aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              aria-hidden="true"
              class="crayons-icon c-btn__icon"
              focusable="false"
            >
              <path
                d="m18.031 16.617 4.283 4.282-1.415 1.415-4.282-4.283A8.96 8.96 0 0 1 11 20c-4.968 0-9-4.032-9-9s4.032-9 9-9 9 4.032 9 9a8.96 8.96 0 0 1-1.969 5.617zm-2.006-.742A6.977 6.977 0 0 0 18 11c0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7a6.977 6.977 0 0 0 4.875-1.975l.15-.15z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <a
          href="#"
          class="border ml-2 py-2 px-4 rounded-md border-[#2F3AB2] text-[#2F3AB2] hover:bg-[#2F3AB2] hover:text-white hover:underline"
        >
          Create Post
        </a>
        <img
          class="p-2 rounded mx-2 cursor-pointer hover:bg-[#E7E3F4]"
          src="@/assets/notification.svg"
          alt="notification icon"
        />
        <img class="mx-1 text-[#2F3AB2]" src="@/assets/user_image.svg" alt="" />
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  // setup() {
  //   return {};
  // },
});
</script>

<style lang="scss" scoped></style>
