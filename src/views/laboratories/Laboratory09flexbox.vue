<template>
  <div class="container">
    <div>
      <h2>Flexbox</h2>
    </div>
    <section>
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
    <section>
      <p>
        Open DevTools in Firefox browser, use Layout function to observe how
        Flexbox is working. <br />
        Add in parent element (<code>&lt;section>&lt;/section></code>) following
        property:
      </p>
      <h4>Task 1</h4>
      <code>
        <pre>
display: flex;
          </pre
        >
      </code>
      <h4>Flexbox basics</h4>
      <section class="flex-basic">
        <div class="one">A bit of text.</div>
        <div class="two">A bit of text.</div>
        <div class="three">A bit of text.</div>
      </section>
      <div class="space"></div>
      <section class="flex-basic">
        <div class="one">Word.</div>
        <div class="two">A bit of longer text than in a sibling div.</div>
        <div class="three">
          A bit of text. A bit of longer text than in a sibling div. A bit of
          text. A bit of longer text than in a sibling div. A bit of longer text
          than in a sibling div. A bit of longer text than in a sibling div.
        </div>
        <div class="four">pneumonoultramicroscopicsilicovolcanoconiosis</div>
      </section>

      <h4>Task 2</h4>
      <p>
        Resize the browser window.
        <br />
        Note that the browser will not break a word.
      </p>
      <h4>Flexbox alignment</h4>
      <section class="flex-alignment">
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
      <h4>Task 3</h4>
      <p>
        Add new property <code>justify-content:</code> to element with a class
        .flex-alignment. Test all options suggested by autocomplete.
      </p>
      <code>
        <pre>
justify-content:
          </pre
        >
      </code>
      <h4>Task 4</h4>
      <p>Test what will happen if you will copy paste below properties:</p>
      <code>
        <pre>
flex-direction: column;
max-height: 50vh;
        </pre>
      </code>
      <section class="flex-align">
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
      <p>Test what will happen if you will copy paste below properties:</p>
      <code>
        <pre>
align-items: end;
        </pre>
      </code>
      <h4>Task 6</h4>
      <p>Test what will happen if you will add below properties:</p>
      <code>
        <pre>
align-content: center;
        </pre>
      </code>
    </section>
    <section>
      <h3>Test yourself!</h3>
      <p>
        Imagine that graphic designer asked you to implement a widget card. Test
        your Flexbox skills and impement the card. Note the placing of the
        elements and try to reflect the design as much as possible.
      </p>
      <img class="img" src="../../assets/images/lab09flex_02.png" alt="" />
      <img class="img" src="../../assets/images/lab09flex.png" alt="" />
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

.flex-basic {
  display: flex;
  /*resize: horizontal;
  overflow: hidden;*/
}

.flex-alignment {
  display: flex;
  flex-wrap: wrap;
}

.flex-alignment > .box {
  height: 90px;
}

.flex-alignment > .box:nth-child(odd) {
  width: 140px;
}

.flex-alignment > .box:nth-child(even) {
  width: 90px;
}

.flex-alignment > .box:nth-child(3) {
  width: 110px;
}

.flex-align {
  display: flex;
  flex-wrap: wrap;
  height: 80vh;
}

.flex-align > .box:nth-child(odd) {
  font-size: 36px;
  width: 140px;
}

.flex-align > .box:nth-child(even) {
  font-size: 18px;
  width: 90px;
}

.flex-align > .box:nth-child(3) {
  font-size: 24px;
  width: 110px;
}

.img {
  width: 20vw;
  padding: 5vw;
}
</style>
