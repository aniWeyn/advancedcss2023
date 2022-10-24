<template>
  <div class="lecture">
    <Slide00 />
    <Slide07 />
    <Slide08 />
    <Slide09 />
    <Slide10 />
    <Slide11 />
    <Slide12 />
    <Slide13 />
    <Slide14 />
    <Slide15 />
    <Slide16 />
    <Slide17 />
  </div>
</template>

<script>
import Slide00 from "@/components/CSSanimations/slide00.vue";
import Slide07 from "@/components/CSSanimations/slide07.vue";
import Slide08 from "@/components/CSSanimations/slide08.vue";
import Slide09 from "@/components/CSSanimations/slide09.vue";
import Slide10 from "@/components/CSSanimations/slide10.vue";
import Slide11 from "@/components/CSSanimations/slide11.vue";
import Slide12 from "@/components/CSSanimations/slide12.vue";
import Slide13 from "@/components/CSSanimations/slide13.vue";
import Slide14 from "@/components/CSSanimations/slide14.vue";
import Slide15 from "@/components/CSSanimations/slide15.vue";
import Slide16 from "@/components/CSSanimations/slide16.vue";
import Slide17 from "@/components/CSSanimations/slide17.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
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
