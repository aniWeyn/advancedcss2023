<template>
    <div class="lecture">
        <Slide00 title="Media Queries" />
        <div class="slide">
      <hr />
      <h3>What values?</h3>
      <p>
        Not based on devices size because devices are coming in different sizes.  <br/><br/>

        Based on your judgment of what looks acceptable when you are resizing the page. 
      </p>
        </div>
    </div>
</template>


<script>
import Slide00 from "@/components/slides/title.vue";

export default {
  name: "MediaQueries",
  components: {
    Slide00,
  },
}
</script>