<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/::first-letter"
        ><code>::first-letter (:first-letter)</code></a
      >
      <p class="first-letter">
        The ::first-letter CSS pseudo-element applies styles to the first letter
        of the first line of a block-level element, but only when not preceded
        by other content (such as images or inline tables).The ::first-letter
        CSS pseudo-element applies styles to the first letter of the first line
        of a block-level element, but only when not preceded by other content
        (such as images or inline tables).
      </p>
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/::first-line"
        ><code>::first-line (:first-line)</code></a
      >
      <p class="first-line">
        The ::first-line CSS pseudo-element applies styles to the first line of
        a block-level element. Note that the length of the first line depends on
        many factors, including the width of the element, the width of the
        document, and the font size of the text.The ::first-line CSS
        pseudo-element applies styles to the first line of a block-level
        element. Note that the length of the first line depends on many factors,
        including the width of the element, the width of the document, and the
        font size of the text.
      </p>
    </section>
  </div>
</template>

<style scoped>
p.first-letter::first-letter {
  color: white;
  background-color: #42b983;
  border-radius: 2px;
  box-shadow: 3px 3px 0 black;
  font-size: 250%;
  padding: 6px 3px;
  margin-right: 6px;
  float: left;
}

p.first-line::first-line {
  color: #42b983;
}
</style>
