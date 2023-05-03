<script setup>
import SidebarComponent from "./SidebarComponent.vue";
import SurveyComponent from "./SurveyComponent.vue";
import { ref, onMounted, onUnmounted, computed, inject } from "vue";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
const store = inject("store");
const isSidebarVisible = ref(false);
const isSmallScreen = ref(false);
const screenSize = ref(window.innerWidth);
const router = useRouter();

function toggleSidebarVisibility() {
  isSidebarVisible.value = !isSidebarVisible.value;
}

function logoutUser() {
  store.changeLoggedIn(false);
  store.changeEmail("");
  router.push("/");
}
// Listen for resize event

window.onload = computed(() => {
  isSmallScreen.value = window.innerWidth <= 750;
});

function handleResize() {
  isSmallScreen.value = window.innerWidth <= 750;
}
onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onUnmounted(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<template>
  <div v-if="isSmallScreen" class="transition-opacity duration-500 ease">
    <div class="h-screen grid auto-rows-min">
      <div
        v-if="isSidebarVisible"
        class="border-e-yellow-400 border-2 grid w-full transition ease-linear duration-1000"
      >
        <div
          v-if="isSidebarVisible"
          class="self-center ml-4"
          @click="toggleSidebarVisibility"
        >
          <Icon icon="material-symbols:close" width="30" />
        </div>
        <SidebarComponent
          @toggle-sidebar-visibility="toggleSidebarVisibility"
          @logout-user="logoutUser"
        />
      </div>
      <div v-else class="self-center mx-4">
        <Icon
          icon="material-symbols:menu"
          width="30"
          @click="toggleSidebarVisibility"
        />
        <div class="m-1 mt-5">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <div class="h-screen flex">
      <div class="border-e-gray-200 border-r-2 grid w-1/4">
        <SidebarComponent @logout-user="logoutUser" />
      </div>
      <div class="basis-full">
        <div class="m-8 mt-12">
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
