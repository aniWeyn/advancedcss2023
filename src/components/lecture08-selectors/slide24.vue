<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:in-range"
        ><code>:in-range</code></a
      >
      <p>
        Applies to elements with range limitations, for example a slider
        control, when the selected value is in the allowed range.
      </p>
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:out-of-range"
        ><code>:out-of-range</code></a
      >
      <p>
        Applies to elements with range limitations, for example a slider
        control, when the selected value is outside the allowed range.
      </p>
    </section>
    <section>
      <form action="" id="form1">
        <ul>
          Values between 1 and 10 are valid.
          <li>
            <input
              id="value1"
              name="value1"
              type="number"
              placeholder="1 to 10"
              min="1"
              max="10"
              value="12"
              required
            />
            <label for="value1"> Your value is </label>
          </li>
        </ul>
      </form>
    </section>
    <section>
      <pre>
          <code>
input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
  border: 2px solid red;
}
          </code>
              </pre>
    </section>
  </div>
</template>

<style scoped>
li {
  list-style: none;
  margin-bottom: 1em;
}

input {
  border: 1px solid black;
  height: 25px;
  width: 100px;
}

input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
  border: 2px solid red;
}

input:in-range + label::after {
  content: "okay.";
}

input:out-of-range + label::after {
  content: "out of range!";
}
</style>
