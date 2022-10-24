<template>
  <div class="slide">
    <hr />
    <h3>CSS variables (Custom properties / cascading variables)</h3>
    <p>
      A common best practice is to define custom properties on the :root
      pseudo-class, so that it can be applied globally across your HTML
      document:
    </p>
    <h5>Declaration</h5>
    <p>naming starts with double hyphen (--)</p>
    <p>
      to use it through whole project it is good to add CSS variable to :root
    </p>
    <div class="example">
      :root { <br />
      --main-bg-color: brown; <br />
      }
    </div>
    <h5>Use</h5>
    <div class="example">
      .one {<br />
      background-color: var(--main-bg-color);<br />
      }
    </div>
  </div>
</template>
