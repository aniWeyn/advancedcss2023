<template>
  <div class="lecture">
    <Slide00 />
    <Transform />
    <Translate />
    <Scale />
    <Rotate />
    <Skew />
    <Matrix />
    <Slide01 />
    <Slide02 />
    <LearnMore />
  </div>
</template>

<script>
import Slide00 from "@/components/transformations/slide00.vue";
import Slide01 from "@/components/transformations/transformations.vue";
import Slide02 from "@/components/transformations/transformations3d.vue";
import Transform from "@/components/transformations/transform.vue";
import Translate from "@/components/transformations/translate.vue";
import Scale from "@/components/transformations/scale.vue";
import Rotate from "@/components/transformations/rotate.vue";
import Skew from "@/components/transformations/skew.vue";
import Matrix from "@/components/transformations/matrix.vue";
import LearnMore from "@/components/transformations/learnmore.vue";

export default {
  name: "Lecture01",
  components: {
    Slide00,
    Slide01,
    Slide02,
    Transform,
    Translate,
    Scale,
    Rotate,
    Skew,
    Matrix,
    LearnMore
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
