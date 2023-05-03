<script setup>
import { Icon } from "@iconify/vue";
const interests = ["Golf", "Music", "Travel"];
import { inject } from "vue";
const store = inject("store");
const user = {
  name: "John Doe",
  email: store.state.email,
  phone: "000-000-0000",
};
</script>
<template>
  <div>
    <div class="border rounded-md drop-shadow-lg flex flex-row p-5">
      <!-- <div class="w-1/5 border-r"></div> -->
      <div class="w-full pl-5">
        <div class="w-full flex flex-row content-between">
          <div class="flex gap-2 items-center h-min">
            <Icon icon="ph:user" height="22" />
            <span class="font-thin gap-2">{{ user.name }}</span>
          </div>
        </div>
        <div class="w-full flex flex-row content-between">
          <div class="flex gap-2 items-center h-min">
            <Icon icon="ph:phone-call-light" height="22" />
            <span class="font-thin gap-2">{{ user.phone }}</span>
          </div>
        </div>
        <div class="w-full flex flex-row content-between">
          <div class="flex gap-2 items-center h-min">
            <Icon icon="iconamoon:email-thin" height="22" />
            <span class="font-thin gap-2">{{ user.email }}</span>
          </div>
        </div>
      </div>
      <div class="w-1/2 border-l pl-5">
        <p>Interest</p>
        <ol>
          <li
            class="font-thin list-disc ml-7"
            v-for="(interest, index) in interests"
            v-bind:key="index"
          >
            {{ interest }}
          </li>
        </ol>
      </div>
    </div>
    <div class="mt-5 border rounded-md p-3 pb-40 font-light">
      <h1>Checkin Overview - {{ user.email }} employee</h1>
    </div>
    <div class="mt-5 border rounded-md p-3 pb-40 font-light">
      <h1>
        Recent Pulse Responses
        <span class="size-100 text-sm text-gray-400"
          >(excluding anonymous Responses)</span
        >
      </h1>
      <h5 class="h-full self-center">No Responses yet</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
