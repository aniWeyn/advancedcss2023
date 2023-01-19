<template>
  <div class="container">
    <div>
      <h2>CSS Transform</h2>
    </div>
    <div>
      <p>
        Draw CSS shape and try to use transformations:
      </p>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">translate(40px)</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">translate(100%)</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">translateY(30px)</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">translateX(30px)</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">translate(50px, 50px)</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in"
          >perspective(500px) translate3d(40px, 40px, 100px);</label
        >
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">scale(0.3);</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">scale(2);</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">scaleX(3);</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">scaleY(1.5);</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">rotate(60deg);</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">rotate(-60deg)</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">rotate(45deg) translateX(180px);</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">translateX(180px) rotate(45deg);</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">rotate3d(1, 1, 1, 45deg);</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">skew(15deg, 15deg);</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">matrix(1, 2, -1, 1, 80, 80);</label>
      </div>
      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">matrix3d(1,0,0,0,0,1,6,0,0,0,1,0,50,100,0,1.1)</label>
      </div>
    </div>
    <h4>Read documentation:</h4>
    <p>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/transform"
        >Mozilla Doc: Transform</a
      >
    </p>
  </div>
</template>

<style>
/* Checkbox element, when checked */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Labels for checked inputs */
input:checked + label {
  color: hotpink;
}
</style>
