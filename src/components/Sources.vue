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
      <div class="link">
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          >developer.mozilla</a
        >
      </div>
      <div class="link">
        <a
          target="_blank"
          href=" https://codepip.com/games/grid-garden/"
          >grid-garden</a
        >
      </div>
      <div class="link">
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout"
          >common_layouts CSS_Grid</a
        >
      </div>
      <div class="link">
        <a
          target="_blank"
          href="https://mozilladevelopers.github.io/playground/css-grid"
          >mozilla developers playground css-grid</a
        >
      </div>
      <div class="link">
        <a
          target="_blank"
          href="https://grid.layoutit.com/"
          >layoutit</a
        >
      </div>
      <div class="link">
        <a
          target="_blank"
          href="https://flexboxfroggy.com/"
          >flexbox froggy</a
        >
      </div>
      <div class="link">
        <a target="_blank" href="https://yoksel.github.io/flex-cheatsheet/"
          >Flex Cheatsheet</a
        >
      </div>
      <div class="link">
        <a target="_blank" href="https://9elements.com/bem-cheat-sheet/">BEM</a>
      </div>
      <div class="link">
        <a target="_blank" href="https://bennettfeely.com/clippy/">clippy</a>
      </div>
      <div class="link">
        <a
          target="_blank"
          href="https://thoughtbot.com/blog/controlling-color-with-sass-color-functions"
          >Controlling collors in SASS</a
        >
      </div>
      <div class="link">
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Center_an_element"
        >
          Center an element</a
        >
      </div>
      <div class="link">
        <a target="_blank" href="https://fffuel.co/"> fffuel.co</a>
      </div>
      <div class="link">
        <a
          target="_blank"
          href="https://training.github.com/downloads/github-git-cheat-sheet/"
        >
          github-git-cheat-sheet</a
        >
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
export default {
  name: "Sources",
  props: {
    msg: String,
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
  margin: 10px;
  align-items: flex-start;
  flex-wrap: wrap;
}

.resources > .link {
  margin: 2px;
  background-color: #2c3e50;
  display: flex;
  justify-content: center;
}
</style>
