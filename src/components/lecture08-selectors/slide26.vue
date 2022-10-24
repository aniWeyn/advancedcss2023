<template>
  <div class="slide">
    <hr />
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#tree-structural_pseudo-classes"
    >
      <h3>Tree-structural pseudo-classes</h3></a
    >
    <p>
      These pseudo-classes relate to the location of an element within the
      document tree.
    </p>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:root"
        ><code>:root</code></a
      >
      <p>
        Represents an element that is the root of the document. In HTML this is
        usually the <code>&lt;html&gt;</code> element.
        <br />
        <code>:root</code> can be useful for declaring global CSS variables.
      </p>
    </section>
    <section>
      <pre>
            <code>
:root {
  --theme__accent: #{$theme__accent};
}
            </code>
        </pre>
    </section>
  </div>
</template>

<style scoped></style>
