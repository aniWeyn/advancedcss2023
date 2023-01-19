<template>
  <div class="container">
    <div>
      <h2>CSS Selectors</h2>
    </div>
    <h3>Exercise with Attribute Selectors</h3>
    <p>
      Based on
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors"
        >attribute selectors documentation</a
      >
      solve below task.
    </p>
    <section>
      <hr />
      <h4>Exercise 1</h4>
      <p>With use of attribute selector give:</p>
      <ul>
        <li>link containing "goolge" <code>color: black;</code></li>
        <li>links which ends on .no <code>color: green;</code></li>
        <li>link with an href matching "home.html" <code>color: red;</code></li>
        <li>link which strarts with https color <code>color: orange;</code></li>
        <li>
          link with class exactly value "hasClass" <code>color: blue;</code>
        </li>
        <li>link with target <code>color: darkblue;</code></li>
      </ul>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;section class="attribute">
  &lt;a href="www.google.com">Google&lt;/a>
  &lt;a href="www.google.no">Google Norway&lt;/a>
  &lt;a href="home.html">Home page&lt;/a>
  &lt;a href="https://www.ntnu.edu/">NTNU&lt;/a>
  &lt;a href="#" class="hasClass">Link with class&lt;/a>
  &lt;a href="#" target="_blank">Link with target&lt;/a>
&lt;/section>

/* styling */
a{
  font-size: x-large;
}

a + a{
  padding-left: 5px;
}
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
??? {
  color: black;
}

??? {
  color: green;
}

??? {
  color: red;
}

??? {
  color: orange;
}

??? {
  color: blue;
}

??? {
  color: darkblue;
}
          </pre
            >
          </code>
        </div>
        <div>
          <h4>Result</h4>
          <img
            class="img"
            src="../../assets/images/lab07_02-ex1.png"
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
