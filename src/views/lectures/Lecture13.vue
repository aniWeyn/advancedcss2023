<template>
  <div class="lecture">
    <Slide00 />
    <Slide01 />
    <Slide02 />
    <Slide03 />
    <Slide04 />
    <!--<Slide05 />
    <Slide06 />
    <Slide07 />
    <Slide08 />   
    <Slide09 />-->
  </div>
</template>

<script>
import Slide00 from "@/components/interactionsOnWeb/slide00.vue";
import Slide01 from "@/components/interactionsOnWeb/slide01.vue";
import Slide02 from "@/components/interactionsOnWeb/slide02.vue";
import Slide03 from "@/components/interactionsOnWeb/slide03.vue";
import Slide04 from "@/components/interactionsOnWeb/slide04.vue";
/*import Slide05 from "@/components/interactionsOnWeb/slide05.vue";
import Slide06 from "@/components/interactionsOnWeb/slide06.vue";
import Slide07 from "@/components/interactionsOnWeb/slide07.vue";
import Slide08 from "@/components/interactionsOnWeb/slide08.vue";
import Slide09 from "@/components/interactionsOnWeb/slide09.vue";*/

export default {
  name: "Lecture01",
  components: {
    Slide00,
    Slide01,
    Slide02,
    Slide03,
    Slide04,
   /* Slide05,
    Slide06,
    Slide07,
    Slide08,
    Slide09 */
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
