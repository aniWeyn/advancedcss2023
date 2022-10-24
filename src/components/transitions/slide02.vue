<template>
  <div class="slide">
    <hr />
    <h3>CSS Transitions</h3>
    <p>
      Transitions enable you to define the transition between two states of an
      element. Different states may be defined using pseudo-classes like :hover
      or :active or dynamically set using JavaScript.
    </p>
    <ul>
      <li>transition-property</li>
      <li>transition-duration</li>
      <li>transition-timing-function</li>
      <li>transition-delay</li>
    </ul>
    <p>
      transition: <span class="property">property name</span> |
      <span class="duration">duration</span> |
      <span class="easing">easing function</span> |
      <span class="delay">delay</span>;
      <br />
      transition: <span class="property p">margin-right </span>
      <span class="duration p">4s </span>
      <span class="easing p">ease-in-out </span>
      <span class="delay">1s</span>;
    </p>
    <p>
      Apply to 2 properties: <br />
      transition:
      <span class="property">margin-right </span>
      <span class="duration">4s</span>,
      <span class="property">color </span>
      <span class="duration">1s</span>; <br />
      <br />
      Apply to all changed properties: <br />
      transition:
      <span class="property">all </span>
      <span class="duration">0.5s </span>
      <span class="easing">ease-out</span>;
      <br />
    </p>
    <span class="sources"
      ><a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition"
        >https://developer.mozilla.org/en-US/docs/Web/CSS/transition</a
      ></span
    >
  </div>
</template>

<style scoped>
.property {
  color: #6622cc;
}

.duration {
  color: #e76f51;
}

.easing {
  color: #00b4d8;
}

.delay {
  color: #2a9d8f;
}

.p {
  padding-right: 65px;
}
</style>
