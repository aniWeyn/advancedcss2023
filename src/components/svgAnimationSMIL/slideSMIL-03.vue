<template>
  <div class="slide">
    <h3>Animating attributes of an element</h3>
    <p><b>attributeName</b> - the name of the attribute to animate.</p>
    <p><b>from</b> - the initial value of the attribute.</p>
    <p><b>to</b> - the final value.</p>
    <p>
      <b>dur</b> - the duration of the animation (for example, write '5s' for 5
      seconds).
    </p>
    <p>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate"
        >Animate documentation</a
      >
    </p>
    <div class="two-columns">
      <div>
        <div class="example example--w100">
          &lt;circle <br />
          <div class="tab">
            <b>cx="0"</b><br />
            cy="50"<br />
            r="15"<br />
            fill="yellow"<br />
            stroke="black"<br />
            stroke-width="1"&gt;<br />
            <div class="tab">
              <br />
              <b> &lt;animate</b><br />
              attributeName="cx"<br />
              from="0"<br />
              to="500"<br />
              dur="5s"<br />
              repeatCount="indefinite"<br />
              <b> /&gt;</b>
              <br /><br />
            </div>
          </div>
          &lt;/circle&gt;
          <br />
        </div>
      </div>
      <div class="middle">
        <svg width="300" height="100" fill="blue">
          <title>Attribute Animation with SMIL</title>
          <rect
            x="0"
            y="0"
            width="300"
            height="100"
            stroke="black"
            stroke-width="1"
          />
          <circle
            cx="0"
            cy="50"
            r="15"
            fill="yellow"
            stroke="black"
            stroke-width="1"
          >
            <animate
              attributeName="cx"
              from="0"
              to="500"
              dur="5s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
    <p class="sources">
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL#animating_attributes_of_an_element"
        >https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL#animating_attributes_of_an_element</a
      >
    </p>
  </div>
</template>

<style scoped>
.middle {
  display: flex;
  justify-content: center;
}
</style>
