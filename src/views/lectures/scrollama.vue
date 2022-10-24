<template>
  <div class="lecture">
    <Slide00 />
    <Scrollama />
    <OtherTools />
  </div>
</template>

<script>
import Slide00 from "@/components/scrollama/slide00.vue";
import Scrollama from "@/components/scrollama/scrollama.vue";
import OtherTools from "@/components/scrollama/other_tools.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    Scrollama,
    OtherTools
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
