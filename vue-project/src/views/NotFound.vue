<template>
  <div>
    <h1>404 — Not Found</h1>
    <p>The page you requested doesn't exist.</p>
    <router-link to="/">Go back home</router-link>
  </div>
</template>

<script>
export default { name: 'NotFound' }
</script>

<style scoped>
h1 { margin: 0 0 8px; }
</style>