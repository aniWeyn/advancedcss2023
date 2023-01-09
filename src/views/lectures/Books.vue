<template>
  <div class="lecture">
    <Intro />
    <Question />
    <Slide01 />
    <Slide06 />
    <Slide07 />
    <Books />
  </div>
</template>

<script>
import Intro from "@/components/books/slide00.vue";
import Question from "@/components/books/question.vue";
import Slide01 from "@/components/books/slide01.vue";
import Slide06 from "@/components/books/slide06.vue";
import Slide07 from "@/components/books/slide07.vue";
import Books from "@/components/books/books.vue";

export default {
  name: "Lecture00",
  components: {
    Intro,
    Slide01,
    Slide06,
    Slide07,
    Books,
    Question
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
