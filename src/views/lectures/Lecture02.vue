<template>
  <div class="lecture">
    <Slide00  />
    <Slide00a />
    <Slide01  />
    <Slide02  />
    <Slide03  />
    <Slide04  />
    <Slide05  />
    <Slide06  />
    <Slide07  />
    <Slide08  />
    <Slide09  />
    <Slide10  />
    <Slide11  />
    <Slide12  />
    <Slide13  />
    <Slide14  />
    <Slide15  />
    <Slide16  />
    <Slide17  />
    <Slide18  />
    <Slide19  />
    <Slide20  />
    <Slide21  />
  </div>
</template>

<script>
import Slide00 from "@/components/lecture02/slide00.vue";
import Slide00a from "@/components/lecture02/slide00a.vue";
import Slide01 from "@/components/lecture02/slide01.vue";
import Slide02 from "@/components/lecture02/slide02.vue";
import Slide03 from "@/components/lecture02/slide03.vue";
import Slide04 from "@/components/lecture02/slide04.vue";
import Slide05 from "@/components/lecture02/slide05.vue";
import Slide06 from "@/components/lecture02/slide06.vue";
import Slide07 from "@/components/lecture02/slide07.vue";
import Slide08 from "@/components/lecture02/slide08.vue";
import Slide09 from "@/components/lecture02/slide09.vue";
import Slide10 from "@/components/lecture02/slide10.vue";
import Slide11 from "@/components/lecture02/slide11.vue";
import Slide12 from "@/components/lecture02/slide12.vue";
import Slide13 from "@/components/lecture02/slide13.vue";
import Slide14 from "@/components/lecture02/slide14.vue";
import Slide15 from "@/components/lecture02/slide15.vue";
import Slide16 from "@/components/lecture02/slide16.vue";
import Slide17 from "@/components/lecture02/slide17.vue";
import Slide18 from "@/components/lecture02/slide18.vue";
import Slide19 from "@/components/lecture02/slide19.vue";
import Slide20 from "@/components/lecture02/slide20.vue";
import Slide21 from "@/components/lecture02/slide21.vue";

export default {
  name: "Lecture01",
  components: {
    Slide00,
    Slide00a,
    Slide01,
    Slide02,
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
    Slide15,
    Slide16,
    Slide17,
    Slide18,
    Slide19,
    Slide20,
    Slide21,
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
.bold {
  font-weight: 700;
}

.past {
  opacity: 0.2;
}

.two-columns {
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr);
  gap: 40px;
}

.three-columns {
  display: grid;
  grid-template-columns: 150px 1.1fr 0.9fr;
  gap: 40px;
  padding-top: 50px;
}

.three-columns--equal {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
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
