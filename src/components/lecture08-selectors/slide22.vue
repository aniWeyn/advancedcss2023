<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:checked"
        ><code>:checked</code></a
      >
      <p>
        Matches when elements such as checkboxes and radiobuttons are toggled on
      </p>
    </section>
    <section>
      <div>
        <input type="radio" name="my-input" id="yes" />
        <label for="yes">Yes</label>

        <input type="radio" name="my-input" id="no" />
        <label for="no">No</label>
      </div>

      <div>
        <input type="checkbox" name="my-checkbox" id="opt-in" />
        <label for="opt-in">Check me!</label>
      </div>

      <select name="my-select" id="fruit">
        <option value="opt1">Apples</option>
        <option value="opt2">Grapes</option>
        <option value="opt3">Pears</option>
      </select>
    </section>

    <section>
      <pre>
          <code>
div,
select {
  margin: 8px;
}

/* Labels for checked inputs */
input:checked + label {
  color: red;
}

/* Radio element, when checked */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Checkbox element, when checked */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Option elements, when selected */
option:checked {
  box-shadow: 0 0 0 3px lime;
  color: red;
}
</code>
</pre>
    </section>
  </div>
</template>

<style scoped>
section + section {
  padding-top: 10px;
}

/* example */
div,
select {
  margin: 8px;
}

/* Labels for checked inputs */
input:checked + label {
  color: red;
}

/* Radio element, when checked */
input[type="radio"]:checked {
  box-shadow: 0 0 0 3px orange;
}

/* Checkbox element, when checked */
input[type="checkbox"]:checked {
  box-shadow: 0 0 0 3px hotpink;
}

/* Option elements, when selected */
option:selected {
  box-shadow: 0 0 0 3px lime;
  color: red;
}

/* */
</style>
