<template>
  <div class="slide">
    <hr />
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator"
    >
      <h3>Child combinator</h3></a
    >
    <p>
      The > combinator selects nodes that are direct children of the first
      element.<br />
      <strong>Syntax:</strong> A > B <br />
      <strong>Example:</strong> ul > li will match all &#60;li&#62; elements
      that are nested directly inside a &#60;ul&#62; element.
    </p>
    <div class="two-columns">
      <div>
        <img
          class="img"
          src="../../assets/images/lecture08-child-combinator.png"
          alt="Example of descendant combinator"
        />
        <br />
        <br />
        <img
          class="img"
          src="../../assets/images/lecture08-child-combinator-css.png"
          alt="Example of descendant combinator"
        />
      </div>
      <section>
        <h5>Result</h5>
        <div>
          <span
            >Span #1, in the div. <br />
            <span>Span #2, in the span that's in the div.</span> <br />
          </span>
        </div>
        <span>Span #3, not in the div at all.</span>
      </section>
    </div>
  </div>
</template>

<style scoped>
span {
  background-color: white;
}

div > span {
  background-color: DodgerBlue;
}
</style>
