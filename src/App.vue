<template>
  <div id="app" class="app-shell">
    <NavBar />
    <main class="container"><router-view />
    </main>
    <footer class="app-footer"><router-view name="footer" />
    </footer>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default { components: { NavBar } };
</script>

<style>
.app-footer {
  border-top: 1px solid #eee;
  padding: 12px;
  text-align: center;
}
</style>