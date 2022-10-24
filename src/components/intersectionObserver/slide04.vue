<template>
  <div class="slide">
    <hr />
    <h3>Intersection Observer</h3>
    <p>
      The Intersection Observer API allows you to configure a callback that is
      called when either of these circumstances occur:
    </p>

    <ul>
      <li>
        A <strong>target</strong> element intersects either the device's
        viewport or a specified element. That specified element is called the
        <strong>root element</strong> or <strong>root</strong> for the purposes
        of the Intersection Observer API.
      </li>
      <li>
        The first time the observer is initially asked to watch a target
        element.
      </li>
    </ul>
    <p>
      The degree of intersection between the target element and its root is the
      <strong>intersection ratio</strong>. This is a representation of the
      percentage of the target element which is visible as a value between 0.0
      and 1.0.
    </p>
  </div>
</template>

<style scoped>
div {
  max-width: 65%;
}

li {
  padding: 8px 0px;
}
</style>
