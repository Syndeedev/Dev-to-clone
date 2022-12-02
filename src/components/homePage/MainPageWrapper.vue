<template>
  <div class="w-full">
    <div
      class="m-auto max-w-7xl grid gap-4 grid-cols-1 md:grid-cols-4 lg:grid-cols-6 mt-16 p-4"
    >
      <div class="sidebar-wrapper-left hidden md:block">
        <left-side-bar />
      </div>
      <main class="main-content col-span-1 md:col-span-3 bg-blue-500">
        main
      </main>
      <div class="sidebar-wrapper-right hidden lg:block lg:col-span-2">
        <right-side-bar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftSideBar from "@/components/homePage/LeftSideBar.vue";
import RightSideBar from "./RightSideBar.vue";

export default defineComponent({
  components: { LeftSideBar, RightSideBar },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.sidebar-wrapper-right {
}
</style>
