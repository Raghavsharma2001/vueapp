<script setup>
import InputComponent from "../components/InputComponent.vue";
import { reactive, computed, inject } from "vue";
import { Icon } from "@iconify/vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
import { useRouter } from "vue-router";
const store = inject("store");
const loginInfo = reactive({
  email: "",
  password: "",
  showPassword: false,
});

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(8) },
  };
});
const router = useRouter();

const v$ = useVuelidate(rules, loginInfo);

const togglePassword = () => {
  loginInfo.showPassword = !loginInfo.showPassword;
};

const loginHandler = async () => {
  const results = await v$.value.$validate();
  if (results) {
    console.log("valid");
    store.changeEmail(loginInfo.email);
    store.changeLoggedIn(true);
    if (store.state.loggedIn) {
      router.push("/dashboard");
    }
  } else {
    alert("Invalid email or password");
  }
};
</script>
<template>
  <div class="flex h-screen">
    <div
      class="grid basis-full gap-6 h-1/3 self-center mx-20"
      :class="{
        'w-full relative': store.state.isSmallScreen,
      }"
    >
      <h1 class="text-6xl">euda</h1>
      <h3 class="text-2xl">Sign in to your account</h3>
      <form @submit.prevent="loginHandler">
        <input
          type="text"
          placeholder="Enter your email address"
          class="rounded-md font-[300] p-2 border-2 border-black-500 w-full"
          v-model="loginInfo.email"
        />
        <span
          class="text-red-500 font-[300] ml-1"
          v-for="error in v$.email.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </span>
        <div class="flex item-center mt-4">
          <input
            v-model="loginInfo.password"
            :type="loginInfo.showPassword ? 'text' : 'password'"
            placeholder="Enter Password"
            class="w-full rounded-l-md border-r-transparent font-[300] p-2 border-2 border-black-500"
          />
          <button
            @click="togglePassword()"
            type="button"
            class="align-middle border-2 border-black-500 p-2 rounded-r-md bg-white"
          >
            <Icon
              v-if="loginInfo.showPassword"
              icon="mdi:eye-off-outline"
              width="22"
            />
            <Icon v-else icon="mdi:eye-outline" width="22" />
          </button>
        </div>
        <span
          class="text-red-500 font-[300] ml-1"
          v-for="error in v$.password.$errors"
          :key="error.$uid"
        >
          {{ error.$message }}
        </span>
        <button
          type="submit"
          class="bg-[#1A202C] p-2 text-white font-[300] w-full mt-4"
        >
          Login
        </button>
      </form>
    </div>
    <div class="md:basis-full" v-if="!store.state.isSmallScreen">
      <img class="h-full w-full" src="../assets/HeroImage.png" />
    </div>
  </div>
</template>
