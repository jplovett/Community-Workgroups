<template>
  <div>
    <NavBar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
export default {
  components: { NavBar }
}
</script>

<style>
/* basic spacing */
nav { padding: 12px; background:#f5f5f5; }
main { padding: 16px; }
</style>