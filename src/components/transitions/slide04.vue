<template>
  <div class="slide">
    <hr />
    <h3>The non-step keyword values (easing functions)</h3>
    <div class="container">
      <strong>ease</strong>: cubic-bezier(0.25, 0.1, 0.25, 1.0),<br />
      the default value, increases in velocity towards the middle of the
      transition, slowing back down at the end.
      <div class="box ease mb"></div>
      <strong>easein</strong>: cubic-bezier(0.42, 0, 1.0, 1.0),<br />
      starts off slowly, with the transition speed increasing until complete
      <div class="box easein mb"></div>
      <strong>easeout</strong>: cubic-bezier(0, 0, 0.58, 1.0),<br />
      starts transitioning quickly, slowing down the transition continues
      <div class="box easeout mb"></div>
      <strong>easeinout</strong>: cubic-bezier(0.42, 0, 0.58, 1.0),<br />
      starts transitioning slowly, speeds up, and then slows down again
      <div class="box easeinout mb"></div>
      <strong>linear</strong>: cubic-bezier(0.0, 0.0, 1.0, 1.0),<br />
      transitions at an even speed
      <div class="box linear mb"></div>
      <strong>cubic-bezier</strong>: an author defined cubic-Bezier curve, where
      the p1 and p3 values must be in the range of 0 to 1.
      <div class="box cb mb"></div>
    </div>
    <h4>Other examples</h4>
    <p>
      <a target="_blank" href="https://easings.net/">easings.net</a>
    </p>
    <p>
      <a target="_blank" href="https://cubic-bezier.com/#.17,.67,.83,.67"
        >cubic-bezier.com</a
      >
    </p>
    <p>
      <span class="sources"
        ><a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#cubic-bezier_examples"
          >https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#cubic-bezier_examples</a
        ></span
      >
    </p>
    <p>
      <span class="sources">
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function"
          >https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function</a
        >
      </span>
    </p>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
}
.box {
  height: 40px;
  width: 40px;
  background-color: #f6bd60;
  transition: transform 1s;
}

.mb {
  margin-bottom: 10px;
}

.box:hover {
  transform: translateX(300%);
}

.ease {
  transition-timing-function: ease;
}
.easein {
  transition-timing-function: ease-in;
}
.easeout {
  transition-timing-function: ease-out;
}
.easeinout {
  transition-timing-function: ease-in-out;
}
.linear {
  transition-timing-function: linear;
}
.cb {
  transition-timing-function: cubic-bezier(0.2, -2, 0.8, 2);
}
</style>
