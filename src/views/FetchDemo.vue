<template>
  <section>
    <h1>Fetch Demo</h1>
    <p v-if="loading">Loading...</p>
    <p v-if="error" class="error">{{ error }}</p>
    <ul v-if="posts">
      <li v-for="p in posts" :key="p.id">
        <strong>{{ p.title }}</strong>
        <div>{{ p.body }}</div>
      </li>
    </ul>
  </section>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "FetchDemo",
  setup() {
    const posts = ref(null);
    const loading = ref(false);
    const error = ref(null);

    onMounted(() => {
      loading.value = true;
      axios.get("https://jsonplaceholder.typicode.com/posts?_limit=5")
        .then(res => posts.value = res.data)
        .catch(err => error.value = err.message)
        .finally(() => loading.value = false);
    });

    return { posts, loading, error };
  }
};
</script>