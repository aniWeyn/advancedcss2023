<template>
  <div class="slide">
    <hr />
    <h3>Performance metrics</h3>
<h6>First paint</h6>
<p>
The time to start of first paint operation. Note that this change may not be visible; it can be a simple background color update or something even less noticeable.
</p>
<h6>First Contentful Paint (FCP)</h6>
<p>
The time until first significant rendering (e.g. of text, foreground or background image, canvas or SVG, etc.). Note that this content is not necessarily useful or meaningful.
</p>

<h6>First Meaningful Paint (FMP)</h6>
<p>
The time at which useful content is rendered to the screen.
</p>

<h6>Largest Contentful Paint (LCP)</h6>
<p>
The render time of the largest content element visible in the viewport.
</p>

<h6>Speed index</h6>
<p>
Measures the average time for pixels on the visible screen to be painted.
</p>

<h6>Time to interactive</h6>
<p>
Time until the UI is available for user interaction (i.e. the last long task of the load process finishes).
</p>
        <p class="sources">
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Learn/Performance/Perceived_performance#performance_metrics"
        >Perceived performance</a
      >
    </p>
  </div>
</template>
