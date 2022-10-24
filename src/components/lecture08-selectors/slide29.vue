<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child"
        ><code>:nth-last-child()</code></a
      >
      <p>
        Uses An+B notation to select elements from a list of sibling elements,
        counting <strong>backwards</strong> from the end of the list.
      </p>
    </section>
    <section>
      <pre>
          <code>
:nth-last-child(4n) {
  color: lime;
}
            </code>
        </pre>
    </section>
    <h4>Exercises</h4>
    <router-link to="/laboratories/laboratory07_04"
      >Laboratory 07 - Pseudo classes</router-link
    >
  </div>
</template>

<style scoped></style>
