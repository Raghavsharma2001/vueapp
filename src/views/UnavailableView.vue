<script setup>
import Sidebar from "../components/Sidebar.vue";
import { useRoute } from "vue-router";
// const path = this.$route.query.page.path;
import { ref, watchEffect } from "vue";

const path = ref("");
const route = useRoute();

watchEffect(() => {
  path.value = route.path;
});
</script>

<template>
  <div>
    <Sidebar>
      <div class="basis-full text-center self-center">
        <h1>This "{{ path }}" Page is currently unavailable</h1>
        <h2>Sorry for the inconvenience</h2>
        <h3>Try again later</h3>
      </div>
    </Sidebar>
  </div>
</template>

<style lang="scss" scoped></style>
