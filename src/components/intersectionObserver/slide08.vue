<template>
  <div class="slide">
    <hr />
    <h3>Targeting an element to be observed</h3>
    <p>
      Once you have created the observer, you need to give it a target element
      to watch:
    </p>
    <pre>
let target = document.querySelector('#listItem');
observer.observe(target);

// the callback we setup for the observer will be executed now for the first time
// it waits until we assign a target to our observer (even if the target is currently not visible)
</pre
    >
    <p>
      Whenever the target meets a threshold specified for the
      IntersectionObserver, the callback is invoked. The callback receives a
      list of IntersectionObserverEntry objects and the observer:
    </p>
    <pre>
let callback = (entries, observer) => {
  entries.forEach(entry => {
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
  });
};
</pre
    >
  </div>
</template>

<style scoped>
div {
  max-width: 65%;
}
</style>
