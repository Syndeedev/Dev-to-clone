<template>
  <div class="bg-gray-50 pt-16">
    <article-details-layout />
  </div>
</template>

<script lang="ts">
import articleDetailsLayout from "@/components/articleDetails/articleDetailsLayout.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { articleDetailsLayout },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
