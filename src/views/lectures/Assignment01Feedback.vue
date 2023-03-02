<template>
  <div class="lecture">
    <div class="slide">
      <hr />
      <h3>CodePen Mistakes</h3>
      <h5>Sending code with errors</h5>
      <p>Examples:</p>
      <ul>
        <li>
          Sending HTML, CSS or JS file with broken, unclosed, closed to early
          tags
        </li>
        <li>Sending CSS file with missing semi-colons</li>
        <li>Keeping commented code in files</li>
      </ul>

      <h5>
        Adding <code>&lt;head&gt; &lt;/head&gt;</code> and
        <code>&lt;body&gt; &lt;/body&gt;</code> tags
      </h5>
      <img
        class=""
        src="../../assets/images/assignment01/codepen01.png"
        alt="Example of adding heading tag and body tag to code pen editor"
      />
    </div>
    <div class="slide">
      <hr />
      <h3>CSS</h3>
      <h5>Use of <code>!important</code> flag</h5>
      <p>
        If you need to use <code>!important</code> flag it means that you need
        to look at specificity
      </p>
      <p>
        See
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity#avoiding_and_overriding_!important"
          target="_blank"
          >Specificity: Avoiding and overriding !important</a
        >
      </p>
      <h5>Overusing <code>#id</code></h5>
      <ul>
        <li>
          <code>#id</code> you would rather use for refering unique element from
          JavaScript
        </li>
        <li>
          <code>#id</code> has already high specificity so it will be difficult
          to overwrite
        </li>
        <li>
          if you have similar elements and use <code>#id</code> then you are
          creating a lot of redundant code
        </li>
      </ul>
      <h5>...</h5>
      <iframe
        height="900"
        style="width: 100%;"
        scrolling="no"
        title="Mistakes 1"
        src="https://codepen.io/AniWeyn/embed/MWqyEvK?default-tab=css"
        frameborder="no"
        loading="lazy"
        allowtransparency="true"
        allowfullscreen="true"
      >
        See the Pen
        <a href="https://codepen.io/AniWeyn/pen/MWqyEvK"> Mistakes 1</a> by
        Sabina (<a href="https://codepen.io/AniWeyn">@AniWeyn</a>) on
        <a href="https://codepen.io">CodePen</a>.
      </iframe>
      <h5>Animations vs transitions</h5>
      <p>
        <a href="https://imjignesh.com/css-transition-vs-animations/"
          >css transition vs animations</a
        >
      </p>
    </div>
    <div class="slide">
      <hr />
      <h3>Intersection Observer</h3>
      <h5>Use of CSS Variables with JavaScript</h5>
      <p>
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#values_in_javascript"
          target="_blank"
          >Using CSS custom properties: values in javascript</a
        >
      </p>
    </div>
    <div class="slide">
      <hr />
      <h3>BEM</h3>
      <p>
        When using BEM you need to focus on recognising Blocks, Elements and
        Modifiers - this will help you to recognise repeatable rules and will
        make your CSS/SASS file shorter and easier to read through
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Assignment01Feedback",
  components: {},
};
</script>

<style>
img {
  width: 60vw;
}
</style>
