<template>
  <div>
    <section class="course_info">
      <a
        target="_blank"
        href="https://www.ntnu.edu/studies/courses/IDG1293#tab=omEmnet"
        ><div class="link">Course Description</div></a
      >
      <a
        target="_blank"
        href="https://www.ntnu.edu/studies/courses/IDG1293#tab=timeplan"
        ><div class="link">Timeplan</div></a
      >

      <a
        target="_blank"
        href="https://www.ntnu.no/studier/bwu/studiets-oppbygging#year=2022&programmeCode=BWU"
        ><div class="link">Webutvikling – Studiets oppbygging</div></a
      >
    </section>
    <section class="resources">
      <div v-for="(link, index) in links" v-bind:key="index">
        <LinkSquare :title="link.title" :href="link.href"></LinkSquare>
      </div>
    </section>
    <section class="visualsrudiocode">
      <h4>Other tips:</h4>
      <h5><strong>Visual Studio Code Shortcuts</strong></h5>
      <div class="tips">
        <p>
          <span>edit multiple rows at the same time:</span> <kbd>shift</kbd> +
          <kbd>option</kbd> + select rows with click
        </p>
      </div>
      <div class="tips">
        <p>
          <span>clean code:</span> <kbd>shift</kbd> + <kbd>option</kbd> +
          <kbd>F</kbd>
        </p>
      </div>
    </section>
    <section>
      <h4>Articles:</h4>
      <div class="link--cssdev">
        <a
          href="https://elad.medium.com/why-the-world-needs-css-developers-318025a6f5c1"
          target="_blank"
          >Why the world needs CSS Developers?</a
        >
      </div>
      <div class="link--cssdev">
        <a
          href="https://www.toptal.com/css/why-you-need-a-css-developer"
          target="_blank"
          >Why you need a CSS Developer?</a
        >
      </div>
    </section>
  </div>
</template>

<script>
import LinkSquare from "@/components/slides/linkSquare";

export default {
  name: "Home",
  components: {
    LinkSquare,
  },
  data() {
    return {
      links: [
        {
          title: "developer.mozilla",
          href: "developer.mozilla.org/en-US/docs/Web/CSS/",
        },
        { title: "grid-garden", href: "codepip.com/games/grid-garden/" },
        {
          title: "common_layouts CSS_Grid",
          href:
            "developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout",
        },
        {
          title: "mozilla developers playground css-grid",
          href: "mozilladevelopers.github.io/playground/css-grid/",
        },
        { title: "layoutit", href: "grid.layoutit.com/" },
        { title: "flexbox froggy", href: "flexboxfroggy.com/" },
        { title: "Flex Cheatsheet", href: "yoksel.github.io/flex-cheatsheet/" },
        { title: "BEM Cheatsheet", href: "9elements.com/bem-cheat-sheet/" },
        { title: "Get BEM", href: "getbem.com/introduction/" },
        { title: "clippy", href: "bennettfeely.com/clippy/" },
        { title: "keyframes", href: "keyframes.app/shadows/" },
        {
          title: "mega-list-svg-information",
          href: "css-tricks.com/mega-list-svg-information/",
        },
        { title: "SVG", href: "developer.mozilla.org/en-US/docs/Web/SVG" },
        {
          title: "cubic Bézier curve",
          href: "codepen.io/thebabydino/pen/EKLNvZ",
        },
        { title: "svgomg", href: "jakearchibald.github.io/svgomg/" },
        {
          title: "Controlling collors in SASS",
          href:
            "thoughtbot.com/blog/controlling-color-with-sass-color-functions",
        },
        {
          title: "Center an element",
          href:
            "developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element",
        },
        { title: "fffuel.co", href: "fffuel.co/" },
        {
          title: "How To Use GitHub",
          href: "www.youtube.com/watch?v=3Tn58KQvWtU",
        },
        {
          title: "github quickstart",
          href: "docs.github.com/en/get-started/quickstart/hello-world",
        },
        {
          title: "github-git-cheat-sheet",
          href: "training.github.com/downloads/github-git-cheat-sheet/",
        },
        { title: "code.visualstudio", href: "code.visualstudio.com/" },
        { title: "svgartista", href: "svgartista.net/" },
        { title: "keyframes", href: "keyframes.app/animate/" },
        { title: "animista", href: "animista.net/" },
        {
          title: "css-selectors-cheatsheet",
          href: "frontend30.com/css-selectors-cheatsheet/",
        },
        {
          title: "audio",
          href: "developer.mozilla.org/en-US/docs/Web/HTML/Element/audio",
        },
        {
          title: "Using and citing sources",
          href: "i.ntnu.no/academic-writing/using-and-citing-sources",
        },
        {
          title: "Advice about writing",
          href: "i.ntnu.no/en/academic-writing/writing-tips",
        },
        {
          title: "CSS Grid + Media Queries Example",
          href: "mdn.github.io/css-examples/learn/media-queries/grid.html",
        },
        { title: "type-scale", href: "type-scale.com/" },
        {
          title: "nth-child-tester",
          href: "css-tricks.com/examples/nth-child-tester/#",
        },
        {
          title: "pseudo-class selector tester",
          href: "lea.verou.me/demos/nth.html",
        },
        { title: "moderncss", href: "moderncss.dev" },
        { title: "smolcss", href: "smolcss.dev" },
        { title: "jensimmons", href: "jensimmons.com" },
        { title: "icons8.com", href: "icons8.com" },
        { title: "color.adobe", href: "color.adobe.com/explore" },
        {
          title: "JPNG.svg, JPNG optimization",
          href: "codepen.io/shshaw/full/LVKEdv",
        },
        {
          title: "SVG manipulate paths",
          href: "codepen.io/netsi1964/pen/pJzWoz",
        },
        {
          title: "SVG Tutorial",
          href: "developer.mozilla.org/en-US/docs/Web/SVG/Tutorial",
        },
        {
          title: "SVG Path Builder",
          href: "codepen.io/anthonydugois/full/mewdyZ",
        },
        {
          title: "Animated Bézier Curves", href:"jasondavies.com/animated-bezier/"
        },
        {
          title: "GSAP 3 on CodePen",
          href: "codepen.io/GreenSock/full/OPqpRJ",
        },
        {
          title: "Using CSS animations", href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"
        },
        {
          title:"Matter.js, 2D physics engine", href:"https://brm.io/matter-js/"
        }
      ],
    };
  },
};
</script>

<style scoped>
.link {
  width: 100px;
  height: 100px;
  padding: 60px;
  background-color: #2c3e50;
  color: white;
  transition: text-decoration-style 1s, background-color 1s;
  border-inline-start: 5px white dotted;
}

.course_info a {
  color: white;
}

.course_info a:hover {
  color: white;
  text-decoration-style: dashed;
  text-decoration-color: white;
}

.link:hover {
  background-color: #2c3e50c3;
}

.course_info {
  display: flex;
  justify-content: space-evenly;
  padding-bottom: 5rem;
}

.resources {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.resources > .link {
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
}

.tips {
  background-color: white;
  padding: 40px;
  margin-bottom: 10px;
  width: fit-content;
}

.tips span {
  font-weight: 600;
}

kbd {
  border: black;
  background-color: rgb(215, 215, 215);
  border-radius: 3px;
  display: inline-block;
  line-height: 1.5;
  margin: 0 0.1em;
  overflow-wrap: break-word;
  padding: 0.1em 0.6em;
  text-shadow: 0 1px 0 white;
}

.link--cssdev {
  font-size: 140%;
  padding-bottom: 40px;
}

.link--cssdev:first-of-type {
  padding-top: 20px;
}
</style>
