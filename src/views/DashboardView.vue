<script setup>
import Sidebar from "../components/Sidebar.vue";
import UserSummaryComponent from "../components/UserSummaryComponent.vue";
</script>
<template>
  <div>
    <Sidebar>
      <div class="basis-full">
        <div class="xs:m-1 sm:m-1">
          <UserSummaryComponent />
        </div>
      </div>
    </Sidebar>
  </div>
</template>

<style lang="scss" scoped></style>
