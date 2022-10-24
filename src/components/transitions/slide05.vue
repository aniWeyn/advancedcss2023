<template>
  <div class="slide">
    <hr />
    <h3>The step timing functions</h3>
    <p>
      Displays the transition along n stops along the transition, displaying
      each stop for equal lengths of time. For example, if n is 5, there are 5
      steps. Whether the transition holds temporarily at 0%, 20%, 40%, 60% and
      80%, on the 20%, 40%, 60%, 80% and 100%, or makes 5 stops between the 0%
      and 100% along the transition, or makes 5 stops including the 0% and 100%
      marks (on the 0%, 25%, 50%, 75%, and 100%) depends on which of the
      following jump terms is used
    </p>
    <div class="container">
      <strong>jump-start / start</strong>: Denotes a left-continuous function,
      <br />
      so that the first jump happens when the transition begins;
      <div class="box start mb"></div>
      <strong>jump-end / end</strong>: Denotes a right-continuous function,
      <br />
      so that the last jump happens when the animation ends;
      <div class="box end mb"></div>
      <strong>jump-none</strong>:<br />
      There is no jump on either end. Instead, holding at both the 0% mark and
      the 100% mark, each for 1/n of the duration
      <div class="box jump-none mb"></div>
      <strong>jump-both</strong>:<br />
      Includes pauses at both the 0% and 100% marks, effectively adding a step
      during the transition time.
      <div class="box jump-both mb"></div>
      <strong>step-start</strong>:<br />
      Equal to steps(1, jump-start)
      <div class="box step-start mb"></div>
      <strong>step-end</strong>:<br />
      Equal to steps(1, jump-end)
      <div class="box step-end mb"></div>
    </div>
    <span class="sources"
      ><a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#formal_syntax"
        >https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function#formal_syntax</a
      ></span
    >
  </div>
</template>

<style scoped>
.box {
  height: 40px;
  width: 40px;
  background-color: #90be6d;
  transition: transform 1s;
}

.mb {
  margin-bottom: 10px;
}

.box:hover {
  transform: translateX(300%);
}

.start {
  transition-timing-function: steps(5, jump-start);
}

.end {
  transition-timing-function: steps(5, jump-end);
}

.jump-none {
  transition-timing-function: steps(5, jump-none);
}

.jump-both {
  transition-timing-function: steps(5, jump-both);
}

.step-start {
  transition-timing-function: step-start;
}

.step-end {
  transition-timing-function: step-end;
}
</style>
