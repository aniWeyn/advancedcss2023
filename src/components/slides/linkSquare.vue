<template>
  <div>
    <a target="_blank" :href="`https://${href}`"
      ><div class="link2">{{ title }}</div></a
    >
  </div>
</template>

<script>
export default {
  name: "LinkSquares",
  props: {
    title: String,
    href: String,
  },
};
</script>

<style scoped>
.link2 {
  padding: 60px;
  background-color: #2c3e50;
  color: white;
  margin: 2px;
  transition: background-color 1s;
}

.link2:hover {
  background-color: #2c3e50c3;
}

.resources a {
  color: white;
  text-decoration: none;
}
</style>
