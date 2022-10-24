<template>
  <div class="container">
    <div>
      <h2>CSS Selectors: pseudo classes</h2>
    </div>
    <h3>:nth-last-child()</h3>
    <p>
      Based on
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-child"
        >:nth-last-child() documentation</a
      >
      solve below task.
    </p>
    <section>
      <hr />
      <h4>Exercise 1</h4>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;main>
  &lt;div class="circle">&lt;span>1&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>2&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>3&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>4&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>5&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>6&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>7&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>8&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>9&lt;/span>&lt;/div>
&lt;/main>


.circle {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #85C7F2;
}
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
??? {
  background-color: #FFE787;
}
          </pre
            >
          </code>
        </div>
        <div>
          <h4>Result</h4>
          <img
            class="img"
            src="../../assets/images/lab07_04-ex1.png"
            width="550px"
          />
        </div>
      </div>
    </section>
    <section>
      <hr />
      <h4>Exercise 2</h4>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;main>
  &lt;div class="circle">&lt;span>1&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>2&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>3&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>4&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>5&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>6&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>7&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>8&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>9&lt;/span>&lt;/div>
&lt;/main>


.circle {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #85C7F2;
}
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
??? {
  background-color: #FFE787;
}
          </pre
            >
          </code>
        </div>
        <div>
          <h4>Result</h4>
          <img
            class="img"
            src="../../assets/images/lab07_04-ex2.png"
            width="550px"
          />
        </div>
      </div>
    </section>
    <section>
      <hr />
      <h4>Exercise 3</h4>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;main>
  &lt;div class="circle">&lt;span>1&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>2&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>3&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>4&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>5&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>6&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>7&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>8&lt;/span>&lt;/div>
&lt;/main>


.circle {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #7DCFB6;
}
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
??? {
  background-color: #00B2CA;
}
          </pre
            >
          </code>
        </div>
        <div>
          <h4>Result</h4>
          <img
            class="img"
            src="../../assets/images/lab07_04-ex3.png"
            width="550px"
          />
        </div>
      </div>
    </section>
    <section>
      <hr />
      <h4>Exercise 4</h4>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;main>
  &lt;div class="circle">&lt;span>1&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>2&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>3&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>4&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>5&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>6&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>7&lt;/span>&lt;/div>
  &lt;div class="circle">&lt;span>8&lt;/span>&lt;/div>
&lt;/main>


.circle {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #7DCFB6;
}
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
??? {
  background-color: #00B2CA;
}
          </pre
            >
          </code>
        </div>
        <div>
          <h4>Result</h4>
          <img
            class="img"
            src="../../assets/images/lab07_04-ex4.png"
            width="550px"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.two-columns {
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr);
  gap: 20px;
}
</style>
