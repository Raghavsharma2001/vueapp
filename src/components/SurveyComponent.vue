<script setup>
import TableComponent from "../components/TableComponent.vue";
</script>
<template>
  <div>
    <h1>Pulse Survey</h1>
    <h4 class="font-thin">
      The Pulse survey app allows Admin users to add pulse survey questions to
      their people to gain informative feedback. This app also provides Admin
      users with detailed analytical reports that provide insight to each pulse
      survey shared, based on the response from users. Simply click 'New' to get
      started and communicate to your team.
    </h4>
    <div class="border-2 px-4 py-3 rounded-lg drop-shadow-lg">
      <TableComponent />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
