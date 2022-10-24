<template>
  <div class="lecture">
    <Slide00 />
    <SlideSMIL01 />
    <SlideSMIL02 />
    <SlideSMIL03 />
    <SlideSMIL04 />
    <SlideSMIL05 />
    <SlideSMIL07 />

  </div>
</template>

<script>
import Slide00 from "@/components/svgAnimationSMIL/slide00.vue";
import SlideSMIL01 from "@/components/svgAnimationSMIL/slideSMIL-01.vue";
import SlideSMIL02 from "@/components/svgAnimationSMIL/slideSMIL-02.vue";
import SlideSMIL03 from "@/components/svgAnimationSMIL/slideSMIL-03.vue";
import SlideSMIL04 from "@/components/svgAnimationSMIL/slideSMIL-04.vue";
import SlideSMIL05 from "@/components/svgAnimationSMIL/slideSMIL-05.vue";
import SlideSMIL07 from "@/components/svgAnimationSMIL/slideSMIL-07.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    SlideSMIL01,
    SlideSMIL02,
    SlideSMIL03,
    SlideSMIL04,
    SlideSMIL05,
    SlideSMIL07,
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
