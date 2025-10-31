<template>
  <nav class="nav">
    <router-link to="/">Home</router-link>
    <span> | </span>
    <router-link to="/todos">Todos</router-link>
    <span> | </span>
    <router-link to="/fetch">Fetch Demo</router-link>
    <span> | </span>
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default { name: "NavBar" };
</script>