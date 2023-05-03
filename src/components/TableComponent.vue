<script setup>
import { ref, computed, inject } from "vue";

const data = {
  column: ["Message", "Created", "Responses"],
  rows: [
    {
      message: "How are you feeling today?",
      created: "01.Sep. 2021, 10:30 am",
      responses: "10",
    },
    {
      message:
        "What is one thing you are grateful for this week? It could be something big or just a small moment.",
      created: "01.May. 2022, 8:45 pm",
      responses: "20",
    },
    {
      message: "How do you cultivate gratitude in your daily life?",
      created: "02.May. 2022, 11:15 am",
      responses: "5",
    },
    {
      message:
        "What role does gratitude play in your mental health and well-being?",
      created: "03.May. 2022, 2:20 pm",
      responses: "1",
    },
    {
      message: "What are some simple ways to express gratitude to others?",
      created: "04.May. 2022, 9:00 am",
      responses: "10",
    },
    {
      message:
        "What impact does practicing gratitude have on your overall happiness?",
      created: "05.May. 2022, 1:30 pm",
      responses: "12",
    },
  ],
};
const store = inject("store");
const searchValue = ref("");
const sortIndex = ref(null);
const sortDirection = ref("asc");

const filteredRows = computed(() => {
  const searchTerm = searchValue.value.toLowerCase();
  return data.rows.filter((row) =>
    row.message.toLowerCase().includes(searchTerm)
  );
});

const sortTable = (index, column) => {
  sortIndex.value = index;
  console.log(sortIndex.value, column);
};
</script>

<template>
  <div>
    <div class="py-2">
      <input
        type="text"
        placeholder="Search Pulse Survey"
        class="border-2 rounded-lg p-2 font-thin focus:outline-none w-1/2"
        v-model="searchValue"
        :class="{
          'w-full': store.state.isSmallScreen,
        }"
      />
    </div>
    <div class="border-2 rounded-md pt-5">
      <table>
        <thead>
          <tr class="bg-slate-100">
            <th
              v-for="(column, index) in data.column"
              v-bind:key="index"
              class="border-1 p-2 pl-4 text-left w-1/2 font-normal"
              @click="sortTable(index, column)"
            >
              {{ column }}
            </th>
          </tr>
        </thead>
        <tbody v-if="filteredRows.length > 0">
          <tr v-for="(rows, index) in filteredRows" v-bind:key="index">
            <td
              v-for="(rowItem, index) in rows"
              v-bind:key="index"
              class="border-t-2 p-3 font-[300]"
            >
              {{ rowItem }}
            </td>
          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="3" class="text-center p-3">No results found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
