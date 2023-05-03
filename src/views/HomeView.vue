<script setup>
import Signin from "../components/Signin.vue";
import { inject, computed, onMounted, onUnmounted } from "vue";

const store = inject("store");

function handleResize() {
  store.changeIsSmallScreen(window.innerWidth <= 750);
}

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});

window.onload = () => {
  store.changeIsSmallScreen(window.innerWidth <= 750);
};
</script>

<template>
  <main>
    <Signin />
  </main>
</template>
