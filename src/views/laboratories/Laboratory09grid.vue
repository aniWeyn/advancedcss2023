<template>
  <div class="container">
    <div>
      <h2>CSS Grid</h2>
    </div>
    <p>
      Open DevTools in Firefox browser, use Layout function to observe how CSS
      Grid is working. <br />
    </p>
    <section class="grid-basic">
      <div class="box one">1</div>
      <div class="box two">2</div>
      <div class="box three">3</div>
      <div class="box poet">4</div>
      <div class="box four">
        <div class="box--small">5</div>
      </div>
      <div class="box five">6</div>
      <div class="box six">7</div>
      <div class="box seven">8</div>
      <div class="box eight">9</div>
      <div class="box nine">10</div>
      <div class="box one">11</div>
      <div class="box two">12</div>
      <div class="box three">13</div>
      <div class="box poet">14</div>
      <div class="box four">
        <div class="box--small">15</div>
      </div>
      <div class="box five">16</div>
      <div class="box six">17</div>
      <div class="box seven">18</div>
      <div class="box eight">19</div>
      <div class="box nine">20</div>
    </section>
    <h4>Task 1</h4>
    <p>Add following code to element with class <code>.grid-basic</code></p>
    <code>
      <pre>
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
grid-template-rows: 5em 3em auto 6em;
          </pre
      >
    </code>
    <h4>Task 2</h4>
    <p>Add following code to element with class <code>.grid-basic</code></p>
    <code>
      <pre>
grid-template-columns: repeat(3, 1fr);
          </pre
      >
    </code>
    <h3>auto-fill / auto-fit</h3>
    <section class="grid-basic">
      <div class="box one">1</div>
      <div class="box two">2</div>
      <div class="box three">3</div>
      <div class="box poet">4</div>
      <div class="box four">
        <div class="box--small">5</div>
      </div>
      <div class="box five">6</div>
      <div class="box six">7</div>
    </section>
    <h4>Task 3</h4>
    <p>Add following code to element with class <code>.grid-basic</code></p>
    <code>
      <pre>
grid-template-columns: repeat(auto-fill, minmax(6em, 1fr));
          </pre
      >
    </code>
    <h4>Task 4</h4>
    <p>Add following code to element with class <code>.grid-basic</code></p>
    <code>
      <pre>
grid-template-columns: repeat(auto-fit, minmax(6em, 1fr));
          </pre
      >
    </code>
    <h3>grid-template-areas</h3>
    <section class="grid-naming-areas">
      <div class="box one">1</div>
      <div class="box two">2</div>
      <div class="box three">3</div>
      <div class="box poet">4</div>
      <div class="box four">
        <div class="box--small">5</div>
      </div>
      <div class="box five">6</div>
      <div class="box six">7</div>
      <div class="box seven">8</div>
      <div class="box eight">9</div>
      <div class="box nine">10</div>
      <div class="box one">11</div>
      <div class="box two">12</div>
      <div class="box three">13</div>
      <div class="box poet">14</div>
      <div class="box four">
        <div class="box--small">15</div>
      </div>
      <div class="box five">16</div>
      <div class="box six">17</div>
      <div class="box seven">18</div>
      <div class="box eight">19</div>
      <div class="box nine">20</div>
    </section>
    <h4>Task 5</h4>
    <p>
      Inspect the code and analyse how <code>grid-template-areas</code> works
    </p>
    <section class="grid-basic">
      <div class="box one">1</div>
    </section>
    <h4>Task 6</h4>
    <p>Add following code to element with class <code>.grid-basic</code></p>
    <code>
      <pre>
place-content: center;
height: 100vh;
          </pre
      >
    </code>
    <section>
      <h3>Test yourself!</h3>
      <p>
        Imagine that graphic designer asked you to implement user header. Test
        your CSS Grid skills and impement the header. Note the placing of the
        elements and try to reflect the design as much as possible.
      </p>
      <img class="img" src="../../assets/images/lab09grid_02.png" alt="" />
      <img class="img2" src="../../assets/images/lab09grid.png" alt="" />
    </section>
  </div>
</template>

<style scoped>
.one {
  background-color: #2a9d8fff;
}

.two {
  background-color: #e9c46aff;
}

.three {
  background-color: #f4a261ff;
}

.four {
  background-color: #e76f51ff;
}

.five {
  background-color: #335c67ff;
}

.six {
  background-color: #fff3b0ff;
}

.seven {
  background-color: #9e2a2bff;
}

.eight {
  background-color: #264653ff;
}

.nine {
  background-color: #540b0eff;
}

.space {
  padding: 10px;
}

.grid-basic {
  display: grid;
}

.grid-naming-areas {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(7, 5em);
  grid-template-areas:
    ". . ."
    "red red red"
    ". blue blue";
}

.img {
  width: 20vw;
  padding: 5vw;
}

.img2 {
  width: 60vw;
  padding: 5vw;
}
</style>
