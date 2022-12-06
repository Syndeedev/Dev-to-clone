<template>
  <div class="w-full bg-gray-50">
    <div
      class="m-auto max-w-7xl grid gap-5 grid-cols-1 md:grid-cols-4 lg:grid-cols-6 mt-16 p-4"
    >
      <div class="sidebar-wrapper-left hidden md:block">
        <left-side-bar />
      </div>
      <main class="main-content col-span-1 md:col-span-3">
        <all-articles-wrapper />
      </main>
      <div class="sidebar-wrapper-right hidden lg:block lg:col-span-2 mx-10">
        <right-side-bar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LeftSideBar from "@/components/homePage/LeftSideBar.vue";
import RightSideBar from "./RightSideBar.vue";
import AllArticlesWrapper from "./AllArticlesWrapper.vue";
import { useStore } from "vuex";
import { ref } from "vue";

export default defineComponent({
  components: { LeftSideBar, RightSideBar, AllArticlesWrapper },
  setup() {
    const store = useStore();
    const page = ref(0);
    const getAllArticles = () => {
      store.dispatch("getAllArticles", ++page.value);
    };
    getAllArticles();
    return {
      page,
      getAllArticles,
    };
  },
});
</script>

<style lang="scss" scoped>
.sidebar-wrapper-right {
}
</style>
