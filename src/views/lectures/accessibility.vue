<template>
  <div class="lecture">
    <Slide00 />
    <Accessibility />
    <AppleA11y />
    <Slide02 />
    <Slide03 />
    <Slide04 />
    <Slide05 />
    <Slide06 />
    <Slide07 />
    <Slide08 />
    <Slide09 />
    <Slide10 />
    <Slide11 />
    <ColorBlindness />
    <DesigningForA11y />
    <WebAccessibility />
    <AccessiblePages />
    <SkipLink />
    <PrefersReducedMotion />
    <AccessibilityAudit />
    <AccessibilityFirefox />
    <GoogleA11y />
    <DevelopingForA11y />

  </div>
</template>

<script>
import Slide00 from "@/components/accessibility/slide00.vue";
/*import Slide01 from "@/components/accessibility/slide01.vue";*/
import Slide02 from "@/components/accessibility/slide02.vue";
import Slide03 from "@/components/accessibility/slide03.vue";
import Slide04 from "@/components/accessibility/slide04.vue";
import Slide05 from "@/components/accessibility/slide05.vue";
import Slide06 from "@/components/accessibility/slide06.vue";
import Slide07 from "@/components/accessibility/slide07.vue";
import Slide08 from "@/components/accessibility/slide08.vue";
import Slide09 from "@/components/accessibility/slide09.vue";
import Slide10 from "@/components/accessibility/slide10.vue";
import Slide11 from "@/components/accessibility/slide11.vue";
import AccessibilityAudit from "@/components/accessibility/accessibilityAudit.vue";
import SkipLink from "@/components/accessibility/skipLink.vue";
import PrefersReducedMotion from "@/components/accessibility/prefers-reduced-motion.vue";
import Accessibility from "@/components/accessibility/accessibility.vue";
import AccessiblePages from "@/components/accessibility/accessiblePages.vue";
import DesigningForA11y from "@/components/accessibility/designingForA11y.vue";
import DevelopingForA11y from "@/components/accessibility/developingForA11y.vue";
import AccessibilityFirefox from "@/components/accessibility/accessibilityFirefox.vue";
import AppleA11y from "@/components/accessibility/appleA11y.vue";
import WebAccessibility from "@/components/accessibility/webaccessibility.vue";
import GoogleA11y from "@/components/accessibility/googleA11y.vue";
import ColorBlindness from "@/components/accessibility/colorBlindness.vue";

export default {
  name: "designingForAnimation",
  components: {
    Slide00,
    Accessibility,
    AccessiblePages,
    Slide02,
    Slide03,
    Slide04,
    Slide05,
    Slide06,
    Slide07,
    Slide08,
    Slide09,
    Slide10,
    Slide11,
    AccessibilityAudit,
    SkipLink,
    PrefersReducedMotion,
    DesigningForA11y,
    DevelopingForA11y,
    AccessibilityFirefox,
    AppleA11y,
    WebAccessibility,
    GoogleA11y,
    ColorBlindness
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
