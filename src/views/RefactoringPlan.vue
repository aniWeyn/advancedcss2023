<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <div class="about">
        <h1>Refactoring</h1>
        <ul>
          <li>Add for every component a separate slide number in routing</li>
          <li>Add bottom navigation menu</li>
          <li>Make more impressive home page</li>
          <li>Move to VueJS3</li>
        </ul>
      </div>
    </article>
    <Sidebar />
    <Sources />
    <Footer />
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";
import Sidebar from "@/components/Sidebar";
import Sources from "@/components/Sources";
import Footer from "@/components/Footer";

export default {
  name: "Random",
  components: {
    Navigation,
    Sidebar,
    Sources,
    Footer,
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
