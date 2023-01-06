<template>
  <div>
    <section class="course_info">
      <div class="link">
        <a
          target="_blank"
          href="https://www.ntnu.edu/studies/courses/IDG1293#tab=omEmnet"
          >Course Description</a
        >
      </div>
      <div class="link">
        <a
          target="_blank"
          href="https://www.ntnu.edu/studies/courses/IDG1293#tab=timeplan"
          >Timeplan</a
        >
      </div>
      <div class="link">
        <a
          target="_blank"
          href="https://www.ntnu.no/studier/bwu/studiets-oppbygging#year=2022&programmeCode=BWU"
          >Webutvikling – Studiets oppbygging</a
        >
      </div>
    </section>
    <section class="resources">
      <div v-for="(link, index) in links" v-bind:key="index">
        <LinkSquare :title="link.title" :href="link.href"></LinkSquare>
      </div>
    </section>
    <section class="visualsrudiocode">
      <h4>Other tips:</h4>
      <h5>Visual Studio Code Shortcuts</h5>
      <p>select many rows: shift + option + L</p>
      <p>clean code: shift + option + F</p>
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
        { title: "developer.mozilla", href: "developer.mozilla.org/en-US/docs/Web/CSS/" },
        { title: "grid-garden", href: "codepip.com/games/grid-garden/" },
        { title: "common_layouts CSS_Grid", href: "developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout" },
        { title: "mozilla developers playground css-grid", href: "mozilladevelopers.github.io/playground/css-grid/" },
        { title: "layoutit", href: "grid.layoutit.com/" },
        { title: "flexbox froggy", href: "flexboxfroggy.com/" },
        { title: "Flex Cheatsheet", href: "yoksel.github.io/flex-cheatsheet/" },
        { title: "BEM Cheatsheet", href: "9elements.com/bem-cheat-sheet/" },
        { title: "Get BEM", href: "getbem.com/introduction/" },
        { title: "clippy", href: "bennettfeely.com/clippy/" },
        { title: "keyframes", href: "keyframes.app/shadows/" },
        { title: "mega-list-svg-information", href: "css-tricks.com/mega-list-svg-information/" },
        { title: "SVG", href: "developer.mozilla.org/en-US/docs/Web/SVG" },
        { title: "cubic Bézier curve", href: "codepen.io/thebabydino/pen/EKLNvZ" },
        { title: "svgomg", href: "jakearchibald.github.io/svgomg/" },
        { title: "Controlling collors in SASS", href: "thoughtbot.com/blog/controlling-color-with-sass-color-functions" },
        { title: "Center an element", href: "developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element" },
        { title: "fffuel.co", href: "fffuel.co/" },
        { title: "How To Use GitHub", href: "https://www.youtube.com/watch?v=3Tn58KQvWtU" },
        { title: "github quickstart", href:"docs.github.com/en/get-started/quickstart/hello-world"},
        { title: "github-git-cheat-sheet", href: "training.github.com/downloads/github-git-cheat-sheet/" },
        { title: "code.visualstudio", href: "https://code.visualstudio.com/" },
        { title: "svgartista", href: "https://svgartista.net/" },
        { title: "keyframes", href: "https://keyframes.app/animate/" },
        { title: "animista", href: "https://animista.net/" },
        { title: "css-selectors-cheatsheet", href: "https://frontend30.com/css-selectors-cheatsheet/" },
        { title: "audio", href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio" },
        { title: "Using and citing sources", href: "https://i.ntnu.no/academic-writing/using-and-citing-sources" },
        { title: "Advice about writing", href: "https://i.ntnu.no/en/academic-writing/writing-tips" },
        { title: "CSS Grid + Media Queries Example", href:"https://mdn.github.io/css-examples/learn/media-queries/grid.html"},
        { title: "type-scale", href:"https://type-scale.com/"}
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
}

.link > a {
  color: white;
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
</style>
