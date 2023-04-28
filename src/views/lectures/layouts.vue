<template>
  <div class="lecture">
    <Slide00 title="Flexible layouts and grid systems" />
    <div class="slide">
      <hr />
      <h4>Layout models</h4>
      <p>
        CSS 2.1 defined four layout modes — algorithms which determine the size
        and position of boxes based on their relationships with their sibling
        and ancestor boxes:
      </p>
      <ul>
        <li>block layout, designed for laying out documents</li>
        <li>inline layout, designed for laying out text</li>
        <li>
          table layout, designed for laying out 2D data in a tabular format
        </li>
        <li>
          positioned layout, designed for very explicit positioning without much
          regard for other elements in the document
        </li>
      </ul>
      <p>New:</p>
      <ul>
        <li>Flexbox</li>
        <li>CSS Grid</li>
      </ul>
    </div>
    <div class="slide">
      <hr />
      <h2>Flexbox Revisit</h2>
    </div>
    <div class="slide">
      <hr />
      <h4>Flexbox reminder</h4>
      <ul>
        <li>flexbox - flexible boxes</li>
        <li>not envisioned of laying out whole web pages</li>
        <li>laying out part of webpages</li>
      </ul>
      <ul>
        <li>vertical centering</li>
        <li>equal heights</li>
        <li>easy to reorder boxes</li>
        <li>good cross-browser compatibility</li>
      </ul>
      <p><bold>ONE DIMENSIONAL TYPE OF LAYOUT</bold></p>
    </div>
    <div class="slide">
      <hr />
      <h4>Flexbox vocabulary</h4>
      <ul>
        <li>
          main axis (<a
            target="_blank"
            href="https://yoksel.github.io/flex-cheatsheet/#section-flex-direction"
            >see flex-direction</a
          >,
          <a
            target="_blank"
            href="https://yoksel.github.io/flex-cheatsheet/#section-flex-flow"
            >see flex-flow</a
          >)
        </li>
        <li>
          cross axis (<a
            target="_blank"
            href="https://yoksel.github.io/flex-cheatsheet/#section-flex-wrap"
            >see flex-wrap</a
          >,
          <a
            target="_blank"
            href="https://yoksel.github.io/flex-cheatsheet/#section-flex-flow"
            >see flex-flow</a
          >)
        </li>
        <li>flex container - "parents"</li>
        <li>flex item - "children"</li>
      </ul>
      <p><bold>ONE DIMENSIONAL TYPE OF LAYOUT</bold></p>
      <img
        class="img"
        src="../../assets/images/flex-direction-terms.svg"
        alt="An illustration of the various directions and sizing terms as applied to a row flex container from https://www.w3.org/TR/css-flexbox-1/"
      />
    </div>
    <div class="slide">
      <hr />
      <h3>Firefox DevTools: Flexbox Inspector</h3>
      <img class="img" src="../../assets/images/lec11-FFDT01.png" alt="" />
      <h4>How is it helpful?</h4>
      <img class="img" src="../../assets/images/lec11-FFDT02.png" alt="" />
      <p>The dev tools shows:</p>
      <ul>
        <li>Outline of Felxbox items</li>
        <li>Available space</li>
        <li>Flex direction</li>
        <li>Visualizes the browser behaviour for the flex items</li>
      </ul>
    </div>
    <div class="slide">
      <hr />
      <h3>Recommended games for practicing Flexbox</h3>
      <ul>
        <li>
          Flexbox Froggy
          <a target="_blank" href="https://flexboxfroggy.com/"
            >https://flexboxfroggy.com//</a
          >
        </li>
        <li>
          Flexbox Defense
          <a target="_blank" href="http://www.flexboxdefense.com/"
            >http://www.flexboxdefense.com/</a
          >
        </li>
      </ul>
    </div>
    <div class="slide">
      <hr />
      <h3>Flexbox - Laboratories</h3>
      <router-link targett="_blank" to="/laboratories/laboratory09flex"
        >Laboratory - Flexbox
      </router-link>
    </div>
    <div class="slide">
      <hr />
      <h3>Firefox DevTools: CSS Grid</h3>
      <img class="img" src="../../assets/images/lec11-FFDT04.png" alt="" />
      <p>The dev tools shows:</p>
      <ul>
        <li>Multiple grids at the same time (useful with nested grids)</li>
        <li>Display line numbers</li>
        <li>Display area names</li>
        <li>Can extend lines infinitely</li>
      </ul>
      <img class="img" src="../../assets/images/lec11-FFDT03.png" alt="" />
    </div>
    <div class="slide">
      <hr />
      <h3>CSS Grid - Laboratories</h3>
      <router-link targett="_blank" to="/laboratories/laboratory09grid"
        >Laboratory - CSS Grid
      </router-link>
    </div>
    <div class="slide">
      <hr />
      <h3>Firefox DevTools: Other CSS reasons to use Firefox</h3>
      <img class="img" src="../../assets/images/lec11-01.png" alt="" />
    </div>
    <div class="slide">
      <hr />
      <h3>So what to use Flex or Grid?</h3>
      <p>CSS Grid was created to fix what Flexbox cannot do.</p>
      <p>These tools are complementary.</p>
      <ul>
        <li>
          Flexbox lines elements in one direction (the browser calculates space
          in only one direction).
        </li>
        <li>
          CSS Grid has ability to line elements in two directions (it considers
          both columns and rows at the same time).
        </li>
        <li>
          There are situation where Flexbox and CSS Grid can be used to solve
          the same problem.
        </li>
        <li>In CSS Grid you can intentionally overwrite items.</li>
      </ul>
      <img class="img" src="../../assets/images/lec11-03flex.png" alt="" />
      <img class="img" src="../../assets/images/lec11-02grid.png" alt="" />
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/slides/title.vue";

export default {
  name: "MediaQueries",
  components: {
    Slide00,
  },
};
</script>

<style scoped>
img.img {
  width: 40%;
}
</style>
