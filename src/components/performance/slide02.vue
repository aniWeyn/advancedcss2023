<template>
  <div class="slide">
    <hr />
    <h3>Lazy loading</h3>
    <p>
      Lazy loading is a strategy to identify resources as non-blocking
      (non-critical) and load these only when needed. It's a way to shorten the
      length of the critical rendering path, which translates into reduced page
      load times.
    </p>
    <p>
      Lazy loading can occur on different moments in the application, but it
      typically happens on some user interactions such as scrolling and
      navigation.
    </p>
    <section>
      <pre>
loading="lazy"
          </pre
      >
      <p>
        Defer loading of the iframe until it reaches a calculated distance from
        the viewport, as defined by the browser.
      </p>
    </section>
    <section>
      <pre>
loading="eager"
          </pre
      >
      <p>
        Load the iframe immediately, regardless if it is outside the visible
        viewport (this is the default value).
      </p>
    </section>
  </div>
</template>

<style scoped>
section {
  padding: 30px 0px;
}
</style>
