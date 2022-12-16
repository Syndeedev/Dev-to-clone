<template>
  <div class="bg-gray-50 pt-16">
    <article-details-layout />

    <DevtoFooter />
  </div>
</template>

<script lang="ts">
import articleDetailsLayout from "@/components/articleDetails/articleDetailsLayout.vue";
import { defineComponent } from "vue";
import DevtoFooter from "@/components/DevtoFooter.vue";

export default defineComponent({
  components: { articleDetailsLayout, DevtoFooter },
  setup() {
    return {};
  },
});
</script>

<style scoped></style>
