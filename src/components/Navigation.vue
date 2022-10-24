<template>
  <nav id="nav" class="main-nav nav">
    <router-link to="/" class="main-nav__link">Course</router-link>
    <router-link to="/assignments" class="main-nav__link">Assignments</router-link>
    <router-link to="/sources" class="main-nav__link">Sources</router-link>
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