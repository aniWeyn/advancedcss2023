<template>
  <div class="slide">
    <hr />
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API"
    >
      <h3>Intersection Observer JavaScript API</h3></a
    >
    <p>
      The Intersection Observer API provides a way to asynchronously observe
      changes in the intersection of a target element with an ancestor element
      or with a top-level document's viewport.
    </p>
    <p>
      The Intersection Observer API lets code register a callback function that
      is executed whenever an element they wish to monitor enters or exits
      another element (or the viewport), or when the amount by which the two
      intersect changes by a requested amount. This way, sites no longer need to
      do anything on the main thread to watch for this kind of element
      intersection, and the browser is free to optimize the management of
      intersections as it sees fit.
    </p>
    <p>
      One thing the Intersection Observer API can't tell you: the exact number
      of pixels that overlap or specifically which ones they are; however, it
      covers the much more common use case of "If they intersect by somewhere
      around N%, I need to do something."
    </p>
    <div></div>
  </div>
</template>

<style scoped>
p {
  max-width: 60%;
}
</style>
