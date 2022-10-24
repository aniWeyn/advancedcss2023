<template>
  <div class="lecture">
    <Slide00 />
    <SlideSVG00 />
    <SlideSVG01 />
    <SlideSMIL06 />
    <Figma />
  </div>
</template>

<script>
import Slide00 from "@/components/svg/slide00.vue";
import SlideSVG00 from "@/components/svg/slideSVG00.vue";
import SlideSVG01 from "@/components/svg/slideSVG01.vue";
import SlideSMIL06 from "@/components/svg/slideSMIL-06.vue";
import Figma from "@/components/svg/figma.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    SlideSVG00,
    SlideSVG01,
    SlideSMIL06,
    Figma
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
