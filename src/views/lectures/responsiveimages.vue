<template>
  <div class="lecture">
    <Slide00 title="Responsive Images" />
    <div class="slide">
      <hr />
      <h4>Image behaviour decided by browser</h4>
      <p></p>
    </div>
    <div class="slide">
      <hr />
      <h4>Image behaviour decided by set of instrucionts/requirements</h4>
      <pre>
        <code>&lt;picture>
            &lt;source
            src="dogs-lg.jpg"
            media="(min-width: 850px)">

            &lt;img src="dogs-thumbnail.jpg" alt="Dog in the park.">
            &lt;/picture></code>
      </pre>
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/slides/title.vue";

export default {
  name: "responsiveimages",
  components: {
    Slide00,
  },
};
</script>
