<template>
  <div class="slide">
    <h3>Animation following a path</h3>
    <p><b>animateMotion</b></p>
    <p>
      The animation here is handled by the <b>animateMotion</b> element. In this
      case, we're establishing a path consisting of a MoveTo command to
      establish the starting point for the animation, then the Horizontal-line
      command to move the circle 300 pixels to the right, followed by the Z
      command, which closes the path, establishing a loop back to the beginning.
    </p>
    <p>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion"
        >Animate Motion</a
      >
    </p>
    <div class="two-columns">
      <div>
        <div class="example example--w100">
          &lt;circle <br />
          <div class="tab">
            cx="0"<br />
            cy="50"<br />
            r="15"<br />
            fill="yellow"<br />
            stroke="black"<br />
            stroke-width="1"&gt;<br />
            <div class="tab">
              <br />
              <b> &lt;animateMotion</b><br />
              path="M 0 0 H 300 Z"<br />
              dur="3s"<br />
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="300"
          height="100"
          fill="blue"
        >
          <title>SVG SMIL Animate with Path</title>
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
            <animateMotion
              path="M 0 0 H 300 Z"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
        </svg>
      </div>
    </div>
    <p class="sources">
      <a
        target="_blank"
        href=" https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL#animation_following_a_path"
        >https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL#animation_following_a_path</a
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
