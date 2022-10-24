<template>
  <div class="slide">
    <hr />
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator"
    >
      <h3>Descendant combinator</h3></a
    >
    <p>
      The (space) combinator selects nodes that are descendants of the first
      element. <br />
      <strong>Syntax:</strong> A B <br />
      <strong>Example:</strong> div span will match all &#60;span&#62; elements
      that are inside a &#60;div&#62; element.
    </p>
    <div class="two-columns">
      <div>
        <img
          class="img"
          src="../../assets/images/lecture08-descendant_combinator.png"
          alt="Example of descendant combinator"
        />
        <br />
        <br />
        <img
          class="img"
          src="../../assets/images/lecture08-universal_selector_css.png"
          alt="Example of descendant combinator"
        />
      </div>
      <div>
        <h5>Result</h5>
        <ul>
          <li>
            <div>Item 1</div>
            <ul>
              <li>Subitem A</li>
              <li>Subitem B</li>
            </ul>
          </li>
          <li>
            <div>Item 2</div>
            <ul>
              <li>Subitem A</li>
              <li>Subitem B</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
li {
  color: red;
}

li li {
  color: green;
}
</style>
