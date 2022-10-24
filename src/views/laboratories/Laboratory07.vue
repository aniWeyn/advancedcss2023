<template>
  <div class="container">
    <div>
      <h2>CSS Selectors</h2>
    </div>
    <h3>Exercise with Combinators</h3>
    <section>
      <hr />
      <h4>Exercise 1</h4>
      <p>Use descendant combinator</p>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;main&gt;
  &lt;div class="circle"&gt;&lt;span&gt;1&lt;/span&gt;&lt;/div&gt;
  &lt;div class="circle"&gt;&lt;span&gt;2&lt;/span&gt;&lt;/div&gt;
  &lt;div class="circle"&gt;&lt;span&gt;3&lt;/span&gt;&lt;/div&gt;
  &lt;section&gt;
    &lt;div class="circle"&gt;&lt;span&gt;4&lt;/span&gt;&lt;/div&gt;
  &lt;/section&gt;
&lt;/main&gt;

.circle {
  height: 50px;
  width: 50px;
  border-radius: 50px;
}
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
??? {
   background-color: #FFD166; 
}
          </pre
            >
          </code>
        </div>
        <div>
          <h4>Result</h4>
          <img
            class="img"
            src="../../assets/images/lab07-ex1.png"
            width="350px"
          />
        </div>
      </div>
    </section>
    <section>
      <hr />
      <h4>Exercise 2</h4>
      <p>Use child combinator</p>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;section&gt;
  &lt;div class="circle"&gt;&lt;span&gt;1&lt;/span&gt;&lt;/div&gt;
  &lt;div class="circle"&gt;&lt;span&gt;2&lt;/span&gt;&lt;/div&gt;
  &lt;div class="circle"&gt;&lt;span&gt;3&lt;/span&gt;&lt;/div&gt;
  &lt;main&gt;
    &lt;div class="circle"&gt;&lt;span&gt;4&lt;/span&gt;&lt;/div&gt;
  &lt;/main&gt;
&lt;/section&gt;

.circle {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #F0A6CA;
}
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
??? {
   background-color: #FFD166;
}
          </pre
            >
          </code>
        </div>
        <div>
          <h4>Result</h4>
          <img
            class="img"
            src="../../assets/images/lab07-ex2.png"
            width="350px"
          />
        </div>
      </div>
    </section>
    <section>
      <hr />
      <h4>Exercise 3</h4>
      <p>Use adjacent sibling combinator</p>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;section&gt;
  &lt;div class="circle"&gt;&lt;span&gt;1&lt;/span&gt;&lt;/div&gt;
  &lt;div class="circle"&gt;&lt;span&gt;2&lt;/span&gt;&lt;/div&gt;
  &lt;div class="circle"&gt;&lt;span&gt;3&lt;/span&gt;&lt;/div&gt;
  &lt;div class="circle"&gt;&lt;span&gt;4&lt;/span&gt;&lt;/div&gt;
&lt;/section&gt;

.circle {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #F0A6CA;
}
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
???  {
   background-color: #B8EBD0;
   margin-left: 20px;
}
          </pre
            >
          </code>
        </div>
        <div>
          <h4>Result</h4>
          <img
            class="img"
            src="../../assets/images/lab07-ex3.png"
            width="350px"
          />
        </div>
      </div>
    </section>
    <section>
      <hr />
      <h4>Exercise 3</h4>
      <p>Use adjacent sibling combinator</p>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;section&gt;
  &lt;div class="circle"&gt;&lt;span&gt;1&lt;/span&gt;&lt;/div&gt;
  &lt;div class="circle"&gt;&lt;span&gt;2&lt;/span&gt;&lt;/div&gt;
  &lt;div class="circle"&gt;&lt;span&gt;3&lt;/span&gt;&lt;/div&gt;
  &lt;div class="circle"&gt;&lt;span&gt;4&lt;/span&gt;&lt;/div&gt;
&lt;/section&gt;

.circle {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #F0A6CA;
}
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
???  {
   background-color: #B8EBD0;
   margin-left: 20px;
}
          </pre
            >
          </code>
        </div>
        <div>
          <h4>Result</h4>
          <img
            class="img"
            src="../../assets/images/lab07-ex3.png"
            width="350px"
          />
        </div>
      </div>
    </section>
    <section>
      <hr />
      <h4>Exercise 4</h4>
      <p>Use general sibling combinator</p>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;section&gt;
  &lt;div class="circle"&gt;&lt;span&gt;1&lt;/span&gt;&lt;/div&gt;
  &lt;span&gt;span 1a &lt;/span&gt;
  &lt;div class="circle"&gt;&lt;span&gt;2&lt;/span&gt;&lt;/div&gt;
  &lt;span&gt;span 2a&lt;/span&gt;
  &lt;span&gt;span 2b&lt;/span&gt;
  &lt;div class="circle"&gt;&lt;span&gt;3&lt;/span&gt;&lt;/div&gt;
  &lt;code&gt;code&lt;/code&gt;
  &lt;span&gt;span 3b&lt;/span&gt;
  &lt;div class="circle"&gt;&lt;span&gt;4&lt;/span&gt;&lt;/div&gt;
&lt;/section&gt;

.circle {
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: #F0A6CA;
}
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
???  {
   background-color: #B8EBD0;
}
          </pre
            >
          </code>
        </div>
        <div>
          <h4>Result</h4>
          <img
            class="img"
            src="../../assets/images/lab07-ex4.png"
            width="350px"
          />
        </div>
      </div>
    </section>
    <hr />
  </div>
</template>

<style scoped>
.two-columns {
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr);
  gap: 20px;
}
</style>
