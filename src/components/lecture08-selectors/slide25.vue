<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:required"
        ><code>:required</code></a
      >
      <p>Matches when a form element is required.</p>
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:optional"
        ><code>:optional</code></a
      >
      <p>Matches when a form element is optional.</p>
    </section>
    <section>
      <form>
        <div class="field">
          <label for="url_input">Enter a URL:</label>
          <input type="url" id="url_input" />
        </div>

        <div class="field">
          <label for="email_input">Enter an email address:</label>
          <input type="email" id="email_input" required />
        </div>
      </form>
    </section>
    <section>
      <pre>
          <code>
input:optional {
  border-color: yellow;
  border-width: 3px;
}

input:required {
  border-color: orange;
  border-width: 3px;
}
          </code>
              </pre>
    </section>
  </div>
</template>

<style scoped>
label {
  display: block;
  margin: 1px;
  padding: 1px;
}

.field {
  margin: 1px;
  padding: 1px;
}

input:optional {
  border-color: yellow;
  border-width: 3px;
}

input:required {
  border-color: orange;
  border-width: 3px;
}
</style>
