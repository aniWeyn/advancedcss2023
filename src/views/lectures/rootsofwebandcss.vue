<template>
  <div class="lecture">
    <Slide00 />
    <WorldWideWeb />
    <HtmlDesignConstraints />
    <W3C />
    <W3CDesignPrinciples />
    <Reflections />
    <WebRendering />
    <CSSOM />
    <CascadeInheritance />
    <Cascade />
    <Specificity />
    <Inheritance />
    <OverridingDeclarations />
    <CSSAsPresentationLayer />
    <GracefulDegradation />
    <ProgressiveEnhancement />
    <Separation />
    <Summary />
  </div>
</template>

<script>
import Slide00 from "@/components/rootsOfWebAndCSS/slide00.vue";
import WorldWideWeb from "@/components/rootsOfWebAndCSS/worldwideweb.vue";
import HtmlDesignConstraints from "@/components/rootsOfWebAndCSS/htmldesignconstraints.vue";
import W3C from "@/components/rootsOfWebAndCSS/w3c.vue";
import W3CDesignPrinciples from "@/components/rootsOfWebAndCSS/w3cdesignprinciples.vue";
import Reflections from "@/components/rootsOfWebAndCSS/reflections.vue";
import WebRendering from "@/components/rootsOfWebAndCSS/webrendering.vue";
import CSSOM from "@/components/rootsOfWebAndCSS/cssom.vue";
import CascadeInheritance from "@/components/rootsOfWebAndCSS/cascadeinheritance.vue";
import Cascade from "@/components/rootsOfWebAndCSS/cascade.vue";
import Inheritance from "@/components/rootsOfWebAndCSS/inheritance.vue";
import Specificity from "@/components/rootsOfWebAndCSS/specificity.vue";
import OverridingDeclarations from "@/components/rootsOfWebAndCSS/overridingdeclarations.vue";
import CSSAsPresentationLayer from "@/components/rootsOfWebAndCSS/cssaspresentationlayer.vue";
import ProgressiveEnhancement from "@/components/lecture02/slide06.vue";
import GracefulDegradation from "@/components/lecture02/slide07.vue";
import Separation from "@/components/lecture02/slide04.vue";
import Summary from "@/components/rootsOfWebAndCSS/summary.vue";

export default {
  name: "rootsOfWebAndCSS",
  components: {
    Slide00,
    WorldWideWeb,
    HtmlDesignConstraints,
    W3C,
    W3CDesignPrinciples,
    Reflections,
    WebRendering,
    CSSOM,
    CascadeInheritance,
    Cascade,
    Inheritance,
    Specificity,
    OverridingDeclarations,
    CSSAsPresentationLayer,
    ProgressiveEnhancement,
    GracefulDegradation,
    Separation,
    Summary
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
