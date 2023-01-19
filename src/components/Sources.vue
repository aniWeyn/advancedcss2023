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
      <h5><strong>Visual Studio Code Shortcuts</strong></h5>
      <div class="tips">
        <p><span>edit multiple rows at the same time:</span> <kbd>shift</kbd> + <kbd>option</kbd> + select rows with click</p>
      </div>
      <div class="tips">
        <p><span>clean code:</span> <kbd>shift</kbd> + <kbd>option</kbd> + <kbd>F</kbd></p>
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

.tips{
  background-color: white;
  padding: 40px;
  margin-bottom: 10px;
  width: fit-content;
}

.tips span{
  font-weight: 600;
}

kbd{
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
</style>
