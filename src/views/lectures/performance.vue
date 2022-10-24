<template>
  <div class="lecture">
    <Slide00 />
    <WhatIsWebPerformance />
    <WhyCare />
    <PerceivedPerformance />
    <PerformanceMetrics />
    <HowToCheck />
    <Slide01 />
    <Slide02 />
    <!--<Slide03 />-->
    <!--<Slide07 />-->
    <Learnmore />
  </div>
</template>

<script>
import Slide00 from "@/components/performance/slide00.vue";
import Slide01 from "@/components/performance/slide01.vue";
import Slide02 from "@/components/performance/slide02.vue";
//import Slide03 from "@/components/performance/slide03.vue";
//import Slide07 from "@/components/performance/slide07-flashOf.vue";
import WhatIsWebPerformance from "@/components/performance/whatisperformance.vue";
import Learnmore from "@/components/performance/learnmore.vue";
import WhyCare from "@/components/performance/whycareaboutperformance.vue";
import HowToCheck from "@/components/performance/howtocheckperformance.vue";
import PerceivedPerformance from "@/components/performance/perceivedperformance.vue";
import PerformanceMetrics from "@/components/performance/performancemetrics.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    Slide01,
    Slide02,
    //Slide03,
    /*Slide07*/
    Learnmore,
    WhatIsWebPerformance,
    WhyCare,
    HowToCheck,
    PerceivedPerformance,
    PerformanceMetrics
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
