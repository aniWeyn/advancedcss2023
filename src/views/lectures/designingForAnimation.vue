<template>
  <div class="lecture">
    <Slide00 />
    <Slide0a />
    <Slide0b />
    <Slide0c />
    <Slide0d />
    <Slide0e />
    <Slide0f />
  </div>
</template>

<script>
import Slide00 from "@/components/designingForAnimation/slide00.vue";
import Slide0a from "@/components/designingForAnimation/slide0a.vue";
import Slide0b from "@/components/designingForAnimation/slide0b.vue";
import Slide0c from "@/components/designingForAnimation/slide0c.vue";
import Slide0d from "@/components/designingForAnimation/slide0d.vue";
import Slide0e from "@/components/designingForAnimation/slide0e.vue";
import Slide0f from "@/components/designingForAnimation/slide0f.vue";

export default {
  name: "designingForAnimation",
  components: {
    Slide00,
    Slide0a,
    Slide0b,
    Slide0c,
    Slide0d,
    Slide0e,
    Slide0f,
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

.img-ms {
  height: 40%;
  width: 40%;
}

.img-ms {
  height: 55%;
  width: 55%;
}

.img-ms--cards {
  height: 35%;
  width: 35%;
}

.middle {
  display: flex;
  justify-content: center;
}
</style>
