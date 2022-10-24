<template>
  <div class="lecture">
    <Slide00 />
    <Slide01a />
    <Slide01 />
    <Slide02 />
    <Slide03 />
    <Slide04 />
    <Slide05 />
    <Slide06 />
    <Slide07 />
    <Slide08 />
    <Slide09  />
    <Slide09a />
    <Slide09b />
    <Slide10  />
    <Slide11  />
    <Slide12  />
    <Slide13  />
    <Slide14  />
    <Slide15 />
    <Slide16 />
    <Slide17 />
    <Slide18 />
    <Slide19 />
    <Slide20 />
    <Slide21 />
    <Slide22 />
    <Slide23 />
    <Slide24 />
    <Slide25 />
    <Slide26 />
    <Slide27 />
    <Slide28 />
    <Slide29 />
    <Slide30 />
    <Slide31 />
    <Slide32  />
    <Slide33  />
    <Slide34 />
    <Slide35  />
  </div>
</template>

<script>
import Slide00 from "@/components/lecture08-selectors/slide00.vue";
import Slide01a from "@/components/lecture08-selectors/slide01a.vue";
import Slide01 from "@/components/lecture08-selectors/slide01.vue";
import Slide02 from "@/components/lecture08-selectors/slide02.vue";
import Slide03 from "@/components/lecture08-selectors/slide03.vue";
import Slide04 from "@/components/lecture08-selectors/slide04.vue";
import Slide05 from "@/components/lecture08-selectors/slide05.vue";
import Slide06 from "@/components/lecture08-selectors/slide06.vue";
import Slide07 from "@/components/lecture08-selectors/slide07.vue";
import Slide08 from "@/components/lecture08-selectors/slide08.vue";
import Slide09 from "@/components/lecture08-selectors/slide09.vue";
import Slide09a from "@/components/lecture08-selectors/slide09a.vue";
import Slide09b from "@/components/lecture08-selectors/slide09b.vue";
import Slide10 from "@/components/lecture08-selectors/slide10.vue";
import Slide11 from "@/components/lecture08-selectors/slide11.vue";
import Slide12 from "@/components/lecture08-selectors/slide12.vue";
import Slide13 from "@/components/lecture08-selectors/slide13.vue";
import Slide14 from "@/components/lecture08-selectors/slide14.vue";
import Slide15 from "@/components/lecture08-selectors/slide15.vue";
import Slide16 from "@/components/lecture08-selectors/slide16.vue";
import Slide17 from "@/components/lecture08-selectors/slide17.vue";
import Slide18 from "@/components/lecture08-selectors/slide18.vue";
import Slide19 from "@/components/lecture08-selectors/slide19.vue";
import Slide20 from "@/components/lecture08-selectors/slide20.vue";
import Slide21 from "@/components/lecture08-selectors/slide21.vue";
import Slide22 from "@/components/lecture08-selectors/slide22.vue";
import Slide23 from "@/components/lecture08-selectors/slide23.vue";
import Slide24 from "@/components/lecture08-selectors/slide24.vue";
import Slide25 from "@/components/lecture08-selectors/slide25.vue";
import Slide26 from "@/components/lecture08-selectors/slide26.vue";
import Slide27 from "@/components/lecture08-selectors/slide27.vue";
import Slide28 from "@/components/lecture08-selectors/slide28.vue";
import Slide29 from "@/components/lecture08-selectors/slide29.vue";
import Slide30 from "@/components/lecture08-selectors/slide30.vue";
import Slide31 from "@/components/lecture08-selectors/slide31.vue";
import Slide32 from "@/components/lecture08-selectors/slide32.vue";
import Slide33 from "@/components/lecture08-selectors/slide33.vue";
import Slide34 from "@/components/lecture08-selectors/slide34.vue";
import Slide35 from "@/components/lecture08-selectors/slide35.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    Slide01a,
    Slide01,
    Slide02,
    Slide03,
    Slide04,
    Slide05,
    Slide06,
    Slide07,
    Slide08,
    Slide09,
    Slide09a,
    Slide09b,
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
    Slide22,
    Slide23,
    Slide24,
    Slide25,
    Slide26,
    Slide27,
    Slide28,
    Slide29,
    Slide30,
    Slide31,
    Slide32,
    Slide33,
    Slide34,
    Slide35,
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
