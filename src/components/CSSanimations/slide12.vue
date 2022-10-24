<template>
  <div class="slide">
    <hr />
    <h3>animation-direction</h3>
    <p>
      The animation-direction CSS property sets whether an animation should play
      forward, backward, or alternate back and forth between playing the
      sequence forward and backward.
    </p>
    <p>
      <strong>Single animation</strong><br />
      animation-direction: normal;
      <i> The animation plays forwards each cycle.</i><br />
      animation-direction: reverse;<i>
        The animation plays backwards each cycle.</i
      ><br />
      animation-direction: alternate;<i>
        The animation reverses direction each cycle, with the first iteration
        being played forwards. </i
      ><br />
      animation-direction: alternate-reverse;
      <i
        >The animation reverses direction each cycle, with the first iteration
        being played backwards.</i
      ><br /><br />

      <strong>Multiple animations</strong><br />
      animation-direction: normal, reverse;<br />
      animation-direction: alternate, reverse, normal;
    </p>
    <img
      class="img"
      src="../../assets/images/lecture07-ex4.png"
      alt="animation-name)"
    />
  </div>
</template>

<style scoped>
.img {
  max-width: 400px;
}
</style>
