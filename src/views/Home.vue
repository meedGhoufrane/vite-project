
<template>
  <div class="home">

  </div>
</template>

<script>
 

export default {
  name: 'HomeView',
   
}
</script>





















<!-- <template>
  <div>
    <p v-for="(task, index) in tasks" :key="index" >{{ task.title }}</p>
    <button @click="increment" :class="counter > 0 ? 'plus' : 'minus'">
      +
    </button>
    <button
      v-on:click="decrement"
      v-bind:class="counter > 0 ? 'plus' : 'minus'"
    >
      -
    </button>
  </div>
</template>
<script>
import axios from "axios";

export default {
  data: () => {
    return {
      counter: 0,
      tasks: [],
    };
  },
  mounted() {
    this.getTasks()
  },
  methods: {
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
    getTasks() {
      axios.get("http://127.0.0.1:8000/api/tasks").then((response) => {
        this.tasks = response.data;
      });
    },
  },
};
</script> -->
