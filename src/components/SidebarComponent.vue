<script setup>
import { Icon } from "@iconify/vue";
import { ref } from "vue";

defineEmits(["toggle-Sidebar-Visibility", "logout-user"]);
const sidebarConfig = [
  {
    name: "Summary",
    icon: "bi:file-bar-graph",
    children: [
      {
        name: "Dashboard",
        icon: "bi:bar-chart",
        path: "/dashboard",
      },
      {
        name: "Teams",
        icon: "healthicons:people-outline",
        path: "/teams",
      },
      {
        name: "Pulse Survey",
        icon: "ph:paper-plane-right-light",
        path: "/pulse-survey",
      },
    ],
  },

  {
    name: "Materials",
    icon: "fluent:tabs-24-regular",
    children: [
      {
        name: "videos",
        path: "/materials/videos",
        icon: "material-symbols:video-camera-back-outline",
      },
    ],
  },
  {
    name: "Euda Content",
    icon: "fluent:tabs-24-regular",
    children: [
      {
        name: "blogs",
        path: "/content/blogs",
        icon: "fluent-mdl2:blog",
      },
    ],
  },
];
const showChildren = ref(new Array(sidebarConfig.length).fill(false));

function toggleChildItems(index) {
  showChildren.value[index] = !showChildren.value[index];
}
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}
</script>

<template>
  <div class="h-screen w-full">
    <nav class="pl-3 pr-3 pt-3">
      <div class="item-left">
        <img
          src="../assets/neu21_transparent_logo.png.svg"
          alt="logo"
          class="h-12"
          @click="toggleSidebar"
        />
        <p class="font-[100] text-gray-600">
          Powered by <span class="font-bold">euda</span>
        </p>
      </div>
      <div class="mt-10">
        <div class="pl-0 pr-3 pt-3 m-0 p-0 w-full">
          <div v-for="(item, index) in sidebarConfig" :key="index">
            <router-link
              v-if="item.path"
              to="/"
              class="px-2 py-3 flex space-x-7 no-underline text-black w-full relative"
            >
              <div class="w-full flex flex-row content-between">
                <div class="flex gap-6">
                  <Icon :icon="item.icon" width="24" />
                  <span class="gap-2">
                    {{ item.name }}
                  </span>
                </div>
              </div>
              <div class="right w-fit m-0">
                <Icon icon="material-symbols:arrow-forward-ios" width="22" />
              </div>
            </router-link>
            <div
              v-else
              class="px-2 py-3 first:mt-7 flex space-x-7 no-underline text-black w-full relative cursor-pointer"
              @click="toggleChildItems(index)"
            >
              <div class="w-full flex flex-row content-between">
                <div class="flex gap-6">
                  <Icon :icon="item.icon" width="24" />
                  <span class="gap-2">
                    {{ item.name }}
                  </span>
                </div>
              </div>
              <div class="right w-fit m-0 text-gray-500 self-center">
                <Icon icon="material-symbols:arrow-forward-ios" width="15" />
              </div>
            </div>

            <div v-if="item.children" class="right w-fit ml-7">
              <div
                v-show="showChildren[index]"
                v-for="(list, number) in item.children"
                :key="number"
              >
                <router-link
                  v-if="list.path"
                  :to="list.path"
                  @click="$emit('toggle-Sidebar-Visibility')"
                  class="px-2 py-3 flex space-x-7 no-underline text-black w-full relative"
                >
                  <div class="w-full flex flex-row content-between">
                    <div class="flex gap-6">
                      <Icon :icon="list.icon" width="24" />
                      <span class="gap-2">
                        {{ list.name }}
                      </span>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="px-2 py-3 mt-5 flex space-x-7 no-underline text-black w-full relative cursor-pointer"
        @click="$emit('logout-user')"
      >
        <div class="w-full flex flex-row content-between">
          <div class="flex gap-6">
            <Icon icon="carbon:logout" width="24" />
            <span class="gap-2"> Logout </span>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="scss" scoped></style>
