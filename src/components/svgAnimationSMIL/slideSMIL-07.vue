<template>
  <div class="slide">
    <h3>Animation following a path</h3>
    <div class="two-columns">
      <div>
        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="none"
            stroke="lightgrey"
            d="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
          />

          <circle r="5" fill="red">
            <animateMotion
              dur="10s"
              repeatCount="indefinite"
              path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
            />
          </circle>
        </svg>
        <p class="sources">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion"
            >https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animateMotion</a
          >
        </p>
        <p class="sources">
          <a
            target="_blank"
            href="https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL#example_2_curved_motion"
            >https://developer.mozilla.org/en-US/docs/Web/SVG/SVG_animation_with_SMIL#example_2_curved_motion</a
          >
        </p>
      </div>
      <div class="middle">
        <svg viewBox="0 0 300 100" fill="blue">
          <title>SVG SMIL Animate with Path</title>
          <rect
            x="0"
            y="0"
            width="300"
            height="100"
            stroke="blue"
            stroke-width="1"
          />
          <rect
            x="0"
            y="0"
            width="20"
            height="20"
            fill="yellow"
            stroke="blue"
            stroke-width="1"
          >
            <animateMotion
              path="M 250,80 H 50 Q 30,80 30,50 Q 30,20 50,20 H 250 Q 280,20,280,50 Q 280,80,250,80Z"
              dur="3s"
              repeatCount="indefinite"
              rotate="auto"
            />
          </rect>
        </svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.middle {
  display: flex;
  justify-content: center;
}
</style>
