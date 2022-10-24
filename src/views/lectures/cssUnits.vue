<template>
  <div class="lecture">
    <Slide00 />
    <Slide01 />
    <Slide02 />
  </div>
</template>

<script>
import Slide00 from "@/components/cssUnits/slide00.vue";
import Slide01 from "@/components/cssUnits/slide01.vue";
import Slide02 from "@/components/cssUnits/slide02.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
    Slide01,
    Slide02
  }
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
