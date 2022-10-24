<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <div class="about">
        <h1>Random group order</h1>
        <button @click="randomizeGroup">Randomize</button>
        <div v-for="group in groupArr" :key="group">
          {{ group }}
        </div>
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
import shuffle from "lodash/shuffle";

export default {
  name: "Random",
  components: {
    Navigation,
    Sidebar,
    Sources,
    Footer,
  },
  data() {
    return {
      groupArr: [
        "IDG_gc_1007_gc_15_sunshineAmigos",
        "IDG_gc_1007_gc_12_guardiansOfCSS",
        "css_gc_1007_gc_rio",
        "css_gc_1007_gc_gjovik",
        "IDG_gc_1007_gc_13_sassySassDevs",
        "IDG_gc_1007_gc_08_mjøsa",
        "IDG_gc_1007_gc_09_sweden",
        "IDG_gc_1007_gc_10_norway",
        "IDG_gc_1007_gc_11_yellowstone",
        "IDG_gc_1007_gc_14_eggi",
      ],
    };
  },
  methods: {
    randomizeGroup() {
      this.groupArr = shuffle(this.groupArr);
      return this.groupArr;
    },
  },
};
</script>
