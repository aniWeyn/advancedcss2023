<template>
  <div class="slide">
    <hr />
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#location_pseudo-classes"
    >
      <h3>Location pseudo-classes</h3></a
    >
    <p>
      These pseudo-classes relate to links, and to targeted elements within the
      current document.
    </p>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:any-link"
        ><code>:any-link</code></a
      ><br />
      Matches an element if the element would match either :link or :visited.
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:link"
        ><code>:link</code></a
      ><br />
      Matches links that have not yet been visited.
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:visited"
        ><code>:visited</code></a
      ><br />
      Matches links that have been visited.
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:local-link"
        ><code>:local-link</code></a
      ><br />
      Matches links whose absolute URL is the same as the target URL, for
      example anchor links to the same page.
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:target"
        ><code>:target</code></a
      ><br />
      Matches the element which is the target of the document URL.
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:target-within"
        ><code>:target-within</code></a
      ><br />
      Matches elements which are the target of the document URL, but also
      elements which have a descendant which is the target of the document URL.
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:scope"
        ><code>:scope</code></a
      ><br />
      Represents elements that are a reference point for selectors to match
      against.
    </section>
  </div>
</template>

<style scoped>
section + section {
  padding-top: 10px;
}
</style>
