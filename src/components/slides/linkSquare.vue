<template>
  <div class="link2">
    <a target="_blank" :href="`https://${href}`"> {{ title }}</a>
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
  width: 100px;
  height: 100px;
  padding: 60px;
  background-color: #2c3e50;
  color: white;
  margin: 2px;
}

.link2 > a {
  color: white;
}
</style>
