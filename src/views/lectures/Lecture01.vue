<template>
  <div class="lecture">
    <Slide00 />
    
    <Slide09 />
    <Infinite />
    <Parallax />
    <HorizontalScrolling />
    <ScrollingDistance />
    <ScrollingTimeline />
    <ScrollingPerspective />
    
    <ScrollingSteps />
    <ScrollingStoryData />
    
    <TransitionsVisualisations />
    <Implementation />
    <ScrollytellingLearnmore />

    <!--<Slide08 />-->
  </div>
</template>

<script>
import Slide00 from "@/components/lecture01/slide00.vue";
import Slide09 from "@/components/lecture01/slide09.vue";
import HorizontalScrolling from "@/components/lecture01/s_horizontal_scrolling.vue";
import Infinite from "@/components/lecture01/s_Infinite.vue";
import Parallax from "@/components/lecture01/s_parallax.vue";
import ScrollingDistance from "@/components/lecture01/s_scrolling_distance.vue";
import ScrollingSteps from "@/components/lecture01/s_scrolling_steps.vue";
import ScrollingStoryData from "@/components/lecture01/s_scrolling_storyData.vue";
import ScrollingTimeline from "@/components/lecture01/s_scrolling_timeline.vue";
import TransitionsVisualisations from "@/components/lecture01/s_transitions_visualisations.vue";
import ScrollytellingLearnmore from "@/components/lecture01/s_scrollytelling_learnmore.vue";
import Implementation from "@/components/lecture01/s_implementation.vue";
import ScrollingPerspective from "@/components/lecture01/s_scrolling_perspective.vue";

export default {
  name: "Lecture01",
  components: {
    Slide00,
    Slide09,
    ScrollytellingLearnmore,
    HorizontalScrolling,
    Infinite,
    Parallax,
    ScrollingDistance,
    ScrollingSteps,
    ScrollingStoryData,
    ScrollingTimeline,
    TransitionsVisualisations,
    Implementation,
    ScrollingPerspective
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
