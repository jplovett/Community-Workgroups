<script setup>

import AppHeader from './components/global/AppHeader.vue';
import AppFooter from './components/global/AppFooter.vue';
</script>

<template>
  <div>
    <AppHeader />
    <main>
      <router-view />
    </main>
    <AppFooter />
  </div>
</template>
<style>
/* Basic app styles for the layout */
#app {
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  /* sticky footer logic */
  display: flex;
  flex-direction: column;
}

main {
  flex-grow: 1;
  /* Ensure main content pushes the footer down */
  padding: 20px;
}
</style>