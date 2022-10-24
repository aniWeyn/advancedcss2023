<template>
  <div class="slide">
    <hr >
    <h3>So what to use Flex or Grid?</h3>
    <p>CSS Grid was created to fix what Flexbox cannot do.</p>
    <p>These tools are complementary.</p>
    <ul>
      <li>
        Flexbox lines elements in one direction (the browser calculates space in
        only one direction).
      </li>
      <li>
        CSS Grid has ability to line elements in two directions (it considers
        both columns and rows at the same time).
      </li>
      <li>
        There are situation where Flexbox and CSS Grid can be used to solve the
        same problem.
      </li>
      <li>In CSS Grid you can intentionally overwrite items.</li>
    </ul>
    <img class="img" src="../../assets/images/lec11-03flex.png" alt="" />
    <img class="img" src="../../assets/images/lec11-02grid.png" alt="" />
  </div>
</template>

<style scoped>
img.img {
  width: 40%;
}
</style>
