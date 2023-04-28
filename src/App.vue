

<template>
  <div id="wrap">
    <Headers />

    <main id="mainView">
      <router-view :key="$route.path"></router-view>
    </main>

  </div>


</template>

<script setup>
  import Headers from './components/Headers.vue';

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
