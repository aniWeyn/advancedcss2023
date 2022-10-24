<template>
  <div class="slide">
    <hr />
    <h3>Test it</h3>
    <p>
      This paragraph contains a link:
      <a href="#">This link will turn red while you click on it.</a><br />
      The paragraph will get a gray background while you click on it or the
      link.
    </p>
    <section>
      <h4>In CSS</h4>
      <pre>
a:link { color: blue; }          /* Unvisited links */
a:visited { color: purple; }     /* Visited links */
a:hover { background: yellow; }  /* Hovered links */
a:active { color: red; }         /* Active links */

p:active { background: #eee; }   /* Active paragraphs */
</pre
      >
    </section>
  </div>
</template>

<style scoped>
a:link {
  color: blue;
} /* Unvisited links */
a:visited {
  color: purple;
} /* Visited links */
a:hover {
  background: yellow;
} /* Hovered links */
a:active {
  color: red;
} /* Active links */

p:active {
  background: #eee;
} /* Active paragraphs */
</style>
