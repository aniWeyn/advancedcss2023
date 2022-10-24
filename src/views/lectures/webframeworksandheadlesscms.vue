<template>
  <div class="lecture">
    <Slide00 />
    <History />
    <ClientSideFrameworks />
    <PopularFrameworks />
    <React />
    <Vue />
    <Svelte />
    <CMS />
    <HeadlessCMS />
    <Jamstack />
    <JamstackFrameworks />
    <Example />
  </div>
</template>

<script>
import Slide00 from "@/components/webframeworksandheadlesscms/slide00.vue";
import History from "@/components/webframeworksandheadlesscms/history.vue";
import ClientSideFrameworks from "@/components/webframeworksandheadlesscms/clientsideframeworks.vue";
import PopularFrameworks from "@/components/webframeworksandheadlesscms/popularframeworks.vue";
import React from "@/components/webframeworksandheadlesscms/react.vue";
import Svelte from "@/components/webframeworksandheadlesscms/svelte.vue";
import Vue from "@/components/webframeworksandheadlesscms/vue.vue";
import CMS from "@/components/webframeworksandheadlesscms/cms.vue";
import HeadlessCMS from "@/components/webframeworksandheadlesscms/headlesscms.vue";
import Jamstack from "@/components/webframeworksandheadlesscms/jamstack.vue";
import JamstackFrameworks from "@/components/webframeworksandheadlesscms/jamstackframeworks.vue";
import Example from "@/components/webframeworksandheadlesscms/example.vue";


export default {
  name: "Lecture00",
  components: {
    Slide00,
    History,
    ClientSideFrameworks,
    PopularFrameworks,
    React,
    Svelte,
    Vue,
    CMS,
    HeadlessCMS,
    Jamstack,
    JamstackFrameworks,
    Example
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
