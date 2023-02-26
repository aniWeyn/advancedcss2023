<template>
  <div class="slide">
    <h1>Lecture</h1>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "SlideTitle",
  props: {
    title: String,
  },
};
</script>
