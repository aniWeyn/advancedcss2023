<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <div class="about">
        <h1>This is an about page</h1>
      </div>
    </article>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";

export default {
  name: "Home",
  components: {
    Navigation,
  },
};
</script>
