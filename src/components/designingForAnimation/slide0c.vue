<template>
  <div  class="slide">
    <hr />
      <div>
          <p class="space">
          For each of this transition you should note multiple properties:
          <ul>
               
               <li>
                <strong>Trigger</strong>: What initiate the change (mouse click, scroll, time stamp, hover).
               </li>

                <li>
                <strong>Sequence</strong>: Use numbers to order the panels and have clear description of sequencing.
               </li>
               <li>
               <strong>Duration</strong>: How long is each action and how it should be interpolated between two states (for example staring slow and then accelerating).
               </li>
               <li><strong>Transformation</strong>: How is it changing in time (opacity, color, size, position), describe it with simple words( shrink, slide, fade).
               </li>
               <li><strong>Vector (for movement)</strong>: How is it moving in space (direction, curve or path).
               </li>
               
               
          </ul>
        </p>
        </div>
        <div class="two-columns">
        <div>
        <img
          class="img"
          src="../../assets/images/lecture03-example1.png"
          alt="Example of Storyboard with sceenes"
        />
      </div>
      <div>
        <img
          class="img"
          src="../../assets/images/lecture03-example2.png"
          alt="Example of Storyboard with sceenes"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.img {
  width: 100%;
}
</style>
