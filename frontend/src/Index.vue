<script setup>
import headerMih from './components/mihHeader.vue'
import IndexPage from "@/components/indexPage.vue";
</script>

<template>
  <header>
    <headerMih usr-name="tung"/>
  </header>

  <main>
    <index-page usr-name="tung"/>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;

  }


  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
