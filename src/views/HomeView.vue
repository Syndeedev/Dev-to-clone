<template>
  <main-page-layout />
</template>

<script lang="ts">
import MainPageLayout from "@/components/homePage/MainPageLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MainPageLayout },
  name: "HomeView",
});
</script>
