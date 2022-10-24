<template>
  <aside class="side">
    <h3>Course description:</h3>
    <a
      target="_blank"
      href="https://www.ntnu.edu/studies/courses/IDG1293#tab=omEmnet"
      >IDG1293</a
    >
    <br />
    <a
      target="_blank"
      href="https://www.ntnu.edu/studies/courses/IDG1293#tab=timeplan"
      >Timeplan</a
    >
  </aside>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    msg: String,
  },
};
</script>

<style scoped>
aside{
    position: sticky;
  top: 0;
}
</style>