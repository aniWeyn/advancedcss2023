<template>
  <div class="container">
    <h3>Introduction to Intersection Observer API</h3>
    <h4>Exercises 1</h4>
    <p>
      Copy and paste Intersection Observer example discussed during the lecture
      to CodePen.
    </p>
    <p>
      <a
        href="https://github.com/aniWeyn/intersection_observer/blob/master/index.html"
        target="_blank"
        >index.html</a
      ><br />
      <a
        href="https://github.com/aniWeyn/intersection_observer/blob/master/intersectionObserverTemplate.js"
        target="_blank"
        >intersectionObserverTemplate.js</a
      >
    </p>
    <ul>
      <li>Check if copy pasted example is working</li>
      <li>Try to change observed element (from section to header)</li>
      <li>Remove class "green", add your own class</li>
    </ul>
    <h4>Exercises 2</h4>
    <p>Create your own example, try to use CSS Selectors, especially :nth-child(), :nth-of-type()</p>
  </div>
</template>

<style scoped>
.two-columns {
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr);
  gap: 20px;
}

section {
  padding: 60px 0px;
}
</style>
