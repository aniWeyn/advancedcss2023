<template>
  <div class="slide">
    <hr />
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator"
    >
      <h3>Adjacent sibling combinator</h3></a
    >
    <p>
      The + combinator selects adjacent siblings. This means that the second
      element directly follows the first, and both share the same parent.<br />
      <strong>Syntax:</strong> A + B <br />
      <strong>Example:</strong> h2 + p will match all &#60;p&#62; elements that
      directly follow an &#60;h2&#62;.
    </p>
    <div class="two-columns">
      <div>
        <img
          class="img"
          src="../../assets/images/lecture08-adjacent-sibling-combinator.png"
          alt="Example of adjacent sibling combinator"
        />
        <br />
        <br />
        <img
          class="img"
          src="../../assets/images/lecture08-adjacent-sibling-combinator_css.png"
          alt="Example of adjacent sibling combinator"
        />
      </div>
      <div>
        <h5>Result</h5>
        <ul>
          <li>One</li>
          <li>Two!</li>
          <li>Three</li>
        </ul>
      </div>
    </div>
    <p>(good for margins)</p>
  </div>
</template>

<style scoped>
li:first-of-type + li {
  color: red;
}
</style>
