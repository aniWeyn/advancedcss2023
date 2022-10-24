<template>
  <div class="slide">
    <hr />
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator"
    >
      <h3>General sibling combinator</h3></a
    >
    <p>
      The ~ combinator selects siblings. This means that the second element
      follows the first (though not necessarily immediately), and both share the
      same parent.<br />
      <strong>Syntax:</strong> A ~ B <br />
      <strong>Example:</strong> p ~ span will match all &#60;span&#62; elements
      that follow a &#60;p&#62;, immediately or not.
    </p>
    <div class="two-columns">
      <div>
        <img
          class="img"
          src="../../assets/images/lecture08-sibling-combinator.png"
          alt="Example of descendant combinator"
        />
        <br />
        <br />
        <img
          class="img"
          src="../../assets/images/lecture08-sibling-combinator_css.png"
          alt="Example of descendant combinator"
        />
      </div>
      <div>
        <h5>Result</h5>
        <span>This is not red.</span>
        <p>Here is a paragraph.</p>
        <code>Here is some code.</code>
        <span>And here is a red span!</span>
        <span>And this is a red span!</span>
        <code>More code...</code>
        <div>How are you?</div>
        <p>Whatever it may be, keep smiling.</p>
        <h1>Dream big</h1>
        <h2>that's all.</h2>
        <span>And yet again this is a red span!</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
p ~ span {
  color: red;
}
</style>
