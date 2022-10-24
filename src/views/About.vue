<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <div class="about">
        <h1>This is an about page</h1>
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
  name: "Home",
  components: {
    Navigation,
    Sidebar,
    Sources,
    Footer,
  },
};
</script>
