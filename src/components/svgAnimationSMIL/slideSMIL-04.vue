<template>
  <div class="slide">
    <h3>Animating the transform attributes</h3>
    <p><b>animateTransform</b></p>
    <p>
      Rotation attributes look like this: rotation(theta, x, y), where theta is
      the angle in degrees, and x and y are absolute positions (the pivot
      point).
    </p>
    <p>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateTransform"
        >Animate transform</a
      >
    </p>
    <p>Type values: translate | scale | rotate | skewX | skewY</p>

    <div class="two-columns">
      <div>
        <div class="example example--w100">
          &lt;rect <br />
          <div class="tab">
            x="0"<br />
            y="50"<br />
            width="15"<br />
            height="34"<br />
            fill="yellow"<br />
            stroke="green"<br />
            stroke-width="1"<br />
            <div class="tab">
              <br />
              <b> &lt;animateTransform</b><br />
              attributeName="transform" begin="0s"<br />
              dur="5s"<br />
              type="rotate"<br />
              from="0 60 60"<br />
              to="360 100 60"<br />
              repeatCount="indefinite"<br />
              <b> /&gt;</b>
              <br /><br />
            </div>
          </div>
          &lt;/rect&gt;
          <br />
        </div>
      </div>
      <div class="middle">
        <svg width="300" height="100" fill="blue">
          <title>SVG SMIL Animate with transform</title>
          <rect
            x="0"
            y="0"
            width="300"
            height="100"
            stroke="black"
            stroke-width="1"
          />
          <rect
            x="0"
            y="50"
            width="15"
            height="34"
            fill="yellow"
            stroke="green"
            stroke-width="1"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="5s"
              type="rotate"
              from="0 60 60"
              to="360 100 60"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      </div>
    </div>
    <p class="sources">
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL#animating_the_transform_attributes"
        >https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL#animating_the_transform_attributes</a
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
