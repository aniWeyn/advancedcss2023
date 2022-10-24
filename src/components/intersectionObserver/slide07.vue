<template>
  <div class="slide">
    <hr />
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer"
    >
      <h3>Creating an intersection observer</h3></a
    >
    <p>
      Create the intersection observer by calling its constructor and passing it
      a callback function to be run whenever a threshold is crossed in one
      direction or the other:
    </p>
    <pre>
let options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

let observer = new IntersectionObserver(callback, options);
</pre
    >
    <p>
      A threshold of 1.0 means that when 100% of the target is visible within
      the element specified by the root option, the callback is invoked.
    </p>
  </div>
</template>

<style scoped>
div {
  max-width: 65%;
}
</style>
