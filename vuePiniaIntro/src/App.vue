<script>
import { useCounterStore } from "@/stores/counter";
export default {
  data() {
    return {
      store: useCounterStore(),
    };
  },
};
</script>

<template>
  <div>
    <!-- onde mostras os nomes que estão na store dos users -->
    <!-- <div v-for="user in store.users" :key="user.id">
      <h2>{{ user.name }}</h2>
      {{ user}}
    </div> -->
    <ul>
      <li v-for="user in store.users" :key="user.id">
        <h2>{{ user.name }}</h2>
        <p>{{ user.id }}</p>
      </li>
    </ul>
  </div>
</template>




