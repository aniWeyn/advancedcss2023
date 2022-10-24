<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:valid"
        ><code>:valid</code></a
      >
      <p>
        Matches an element with valid contents. For example an input element
        with type 'email' which contains a validly formed email address.
      </p>
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:invalid"
        ><code>:invalid</code></a
      >
      <p>
        Matches an element with invalid contents. For example an input element
        with type 'email' with a name entered.
      </p>
    </section>
    <section>
      <div>
        <label for="fname">First name *: </label>
        <input id="fname" name="fname" type="text" required />
        <span></span>
      </div>
    </section>
    <section>
      <pre>
          <code>
input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
          </code>
              </pre>
    </section>
  </div>
</template>

<style scoped>
input + span {
  position: relative;
}

input + span::before {
  position: absolute;
  right: -20px;
  top: 5px;
}

input:invalid {
  border: 2px solid red;
}

input:invalid + span::before {
  content: "✖";
  color: red;
}

input:valid + span::before {
  content: "✓";
  color: green;
}
</style>
