<template>
  <main-page-wrapper />
</template>

<script lang="ts">
import MainPageWrapper from "@/components/homePage/MainPageWrapper.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { MainPageWrapper },
  name: "HomeView",
});
</script>
