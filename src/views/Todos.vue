<template>
  <section>
    <h1>Todos</h1>
    <form @submit.prevent="addTodo" class="form">
      <input v-model="value" placeholder="New todo" />
      <button type="submit">Add</button>
    </form>

    <ul>
      <li v-for="t in todos" :key="t.id">
        {{ t.text }}
        <button @click="removeTodo(t.id)">Remove</button>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref, watch } from "vue";

export default {
  name: "Todos",
  setup() {
    const todos = ref([]);
    const value = ref("");

    try {
      const raw = localStorage.getItem("todos_v1");
      todos.value = raw ? JSON.parse(raw) : [
        { id: 1, text: "Learn Vue basics" },
        { id: 2, text: "Build a simple SPA" }
      ];
    } catch {
      todos.value = [];
    }

    watch(todos, (v) => {
      localStorage.setItem("todos_v1", JSON.stringify(v));
    }, { deep: true });

    function addTodo() {
      const text = value.value.trim();
      if (!text) return;
      todos.value.push({ id: Date.now(), text });
      value.value = "";
    }

    function removeTodo(id) {
      todos.value = todos.value.filter(t => t.id !== id);
    }

    return { todos, value, addTodo, removeTodo };
  }
};
</script>