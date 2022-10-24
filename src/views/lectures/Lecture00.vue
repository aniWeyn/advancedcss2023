<template>
  <div class="lecture">
    <Slide00 v-if="render === 0" />
    <Slide01 v-if="render === 1" />
    <!--<Slide02 v-if="render === 2" />-->
    <Slide03 v-if="render === 2" />
    <Slide04 v-if="render === 3" />
    <Slide05 v-if="render === 4" />
    <Slide06 v-if="render === 5" />
    <Slide07 v-if="render === 6" />
    <Slide08 v-if="render === 7" />
    <Slide09 v-if="render === 8" />
    <Slide10 v-if="render === 9" />
    <Slide11 v-if="render === 10" />
    <Slide12 v-if="render === 11" />
    <Slide13 v-if="render === 12" />
    <Slide14 v-if="render === 13" />
    <Slide15 v-if="render === 14" />
    <div class="button-navigation">
      <button v-if="render != 0" v-on:click="render -= 1">Back</button>
      <button v-if="render != 14" v-on:click="render += 1">Next</button>
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/lecture00/slide00.vue";
import Slide01 from "@/components/lecture00/slide01.vue";
/*import Slide02 from "@/components/lecture00/slide02.vue";*/
import Slide03 from "@/components/lecture00/slide03.vue";
import Slide04 from "@/components/lecture00/slide04.vue";
import Slide05 from "@/components/lecture00/slide05.vue";
import Slide06 from "@/components/lecture00/slide06.vue";
import Slide07 from "@/components/lecture00/slide07.vue";
import Slide08 from "@/components/lecture00/slide08.vue";
import Slide09 from "@/components/lecture00/slide09.vue";
import Slide10 from "@/components/lecture00/slide10.vue";
import Slide11 from "@/components/lecture00/slide11.vue";
import Slide12 from "@/components/lecture00/slide12.vue";
import Slide13 from "@/components/lecture00/slide13.vue";
import Slide14 from "@/components/lecture00/slide14.vue";
import Slide15 from "@/components/lecture00/slide15.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    Slide01,
    /*Slide02,*/
    Slide03,
    Slide04,
    Slide05,
    Slide06,
    Slide07,
    Slide08,
    Slide09,
    Slide10,
    Slide11,
    Slide12,
    Slide13,
    Slide14,
    Slide15
  },
  data() {
    return {
      render: 0,
    };
  },
  methods: {
    add() {
      this.render + 1;
      return this.render;
    },
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
