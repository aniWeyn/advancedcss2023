<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:enabled"
        ><code>:enabled</code></a
      >
      <p>Represents a user interface element that is in an enabled state.</p>
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:disabled"
        ><code>:disabled</code></a
      >
      <p>Represents a user interface element that is in a disabled state.</p>
    </section>
    <section>
      <form action="url_of_form">
        <label for="FirstField">First field (enabled):</label>
        <input type="text" id="FirstField" value="Lorem" /><br />

        <label for="SecondField">Second field (disabled):</label>
        <input
          type="text"
          id="SecondField"
          value="Ipsum"
          disabled="disabled"
        /><br />

        <input type="button" value="Submit" />
      </form>
    </section>
    <section>
      <pre>
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
</pre
      >
    </section>
  </div>
</template>

<style scoped>
section + section {
  padding-top: 10px;
}

/* example */
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}

/* */
</style>
