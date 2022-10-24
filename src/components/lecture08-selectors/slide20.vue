<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:placeholder-shown"
        ><code>:placeholder-shown</code></a
      >
      <p>
        Matches an input element that is displaying placeholder text, for
        example from the HTML5 placeholder attribute.
      </p>
    </section>
    <section>
      <input placeholder="Type something here!" />
    </section>

    <section>
      <pre>
          <code>
input {
  border: 1px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border: 3px solid orange;
  font-style: italic;
  font-size: large;
  font-weight: 600;
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
input {
  border: 1px solid black;
  padding: 3px;
}

input:placeholder-shown {
  border: 3px solid orange;
  font-style: italic;
  font-size: large;
  font-weight: 600;
}

/* */
</style>
