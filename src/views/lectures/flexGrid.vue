<template>
  <div class="lecture">
    <Slide00 />
    <!--<Slide01 v-if="render === 1" />-->
    <Slide02 />
    <Slide03  />
    <!--<Slide04 v-if="render === 4" />-->
    <Slide05  />
    <Slide06  />
    <Slide07  />
    <Slide08 />

  </div>
</template>

<script>
import Slide00 from "@/components/flexGrid/slide00.vue";
/*import Slide01 from "@/components/lecture11-flexGrid/slide_flex--01.vue";*/
import Slide02 from "@/components/flexGrid/slide_FirefoxDevTools_01.vue";
import Slide03 from "@/components/flexGrid/slide_flex--02.vue";
/*import Slide04 from "@/components/lecture11-flexGrid/slide_grid--01.vue";*/
import Slide05 from "@/components/flexGrid/slide_FirefoxDevTools_02.vue";
import Slide06 from "@/components/flexGrid/slide_grid--02.vue";
import Slide07 from "@/components/flexGrid/slide_FirefoxDevTools_03.vue";
import Slide08 from "@/components/flexGrid/slide_flexVsGrid";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    /*Slide01,*/
    Slide02,
    Slide03,
    /*Slide04,*/
    Slide05,
    Slide06,
    Slide07,
    Slide08,

  },
};
</script>

<style>
.space {
  padding-bottom: 5px;
}

.bold {
  font-weight: 700;
}

.past {
  opacity: 0.2;
}

.two-columns {
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr);
  gap: 20px;
}

.three-columns {
  display: grid;
  grid-template-columns: 150px 1.1fr 0.9fr;
  gap: 40px;
  padding-top: 50px;
}

.rotate {
  transform: rotate(270deg);
  position: absolute;
  top: 20%;
  left: 0;
}

.flex {
  display: flex;
}

.font--small {
  font-size: 0.7em;
}
</style>
