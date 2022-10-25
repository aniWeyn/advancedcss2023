<template>
  <nav id="nav" class="main-nav nav">
    <router-link to="/" class="main-nav__link">Advanced CSS</router-link>
    <router-link to="/assignments" class="main-nav__link">Assignments</router-link>
    <router-link to="/resources" class="main-nav__link">Resources</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
nav{
    position: sticky;
  top: 0;
}
</style>