<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/::before"
        ><code>::before (:before)</code></a
      >
      <p class="before">
        In CSS, ::before creates a pseudo-element that is the first child of the
        selected element. It is often used to add cosmetic content to an element
        with the content property. It is inline by default.
      </p>
    </section>
    <section>
      <pre>
          <code>
p::before {
  content: "♥";
  color: #42b983;
}
            </code>
        </pre>
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/::after"
        ><code>::after (:after)</code></a
      >
      <p class="after">
        In CSS, ::after creates a pseudo-element that is the last child of the
        selected element. It is often used to add cosmetic content to an element
        with the content property. It is inline by default.
      </p>
    </section>
    <section>
      <pre>
          <code>
p::after {
  content: "♥";
  color: #42b983;
}
            </code>
        </pre>
    </section>
    <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/GhwpECkJOKg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>
</template>

<style scoped>
p.after::after {
  content: "♥";
  color: #42b983;
}

p.before::before {
  content: "♥";
  color: #42b983;
}
</style>
