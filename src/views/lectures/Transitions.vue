<template>
  <div class="lecture">
    <Slide00 />
    <Slide02 />
    <Slide03 />
    <Slide04 />
    <Slide04a />
    <Slide05 />
    <Slide06 />
  </div>
</template>

<script>
import Slide00 from "@/components/transitions/slide00.vue";
import Slide02 from "@/components/transitions/slide02.vue";
import Slide03 from "@/components/transitions/slide03.vue";
import Slide04 from "@/components/transitions/slide04.vue";
import Slide04a from "@/components/transitions/slide04a.vue";
import Slide05 from "@/components/transitions/slide05.vue";
import Slide06 from "@/components/transitions/slide06.vue";


export default {
  name: "Lecture01",
  components: {
    Slide02,
    Slide03,
    Slide04,
    Slide04a,
    Slide05,
    Slide06,
    Slide00
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
