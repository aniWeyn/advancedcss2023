<template>
  <div class="wrapper">
    <Navigation />
    <article class="content">
      <div class="about">
        <h1>Assignments</h1>
            <Slide04  />
    <Slide05 />
    <Slide06  />
    <Slide07  />
    <Slide08  />
    <Slide09  />
      </div>
    </article>
  </div>
</template>
<script>
import Navigation from "@/components/Navigation";

import Slide04 from "@/components/lecture00/slide04.vue";
import Slide05 from "@/components/lecture00/slide05.vue";
import Slide06 from "@/components/lecture00/slide06.vue";
import Slide07 from "@/components/lecture00/slide07.vue";
import Slide08 from "@/components/lecture00/slide08.vue";
import Slide09 from "@/components/lecture00/slide09.vue";

export default {
  name: "Home",
  components: {
    Navigation,
    Slide04,
    Slide05,
    Slide06,
    Slide07,
    Slide08,
    Slide09
  },
};
</script>
