<template>
  <div class="slide">
    <hr />
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#the_input_pseudo-classes"
    >
      <h3>The input pseudo-classes</h3></a
    >
    <p>
      These pseudo-classes relate to form elements, and enable selecting
      elements based on HTML attributes and the state that the field is in
      before and after interaction.
    </p>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:autofill"
        ><code>:autofill</code></a
      >
      <p>
        Matches when an <code>&lt;input /&gt;</code> has been autofilled by the
        browser.
      </p>
      <h5>Example</h5>
      <form method="post" action="">
        <label for="email">Email </label>
        <input type="email" name="email" id="email" autocomplete="email" />
        <br />
        <label for="given-name">Frist name </label>
        <input
          type="country"
          name="given-name"
          id="given-name"
          autocomplete="given-name"
        />
        <br />
        <label for="family-name">Last name </label>
        <input
          type="family-name"
          name="family-name"
          id="family-name"
          autocomplete="family-name"
        />
        <br />
        <label for="country">Country </label>
        <input
          type="country"
          name="countrycountry"
          id="country"
          autocomplete="country"
        />
      </form>
      <pre>
input {
  border: 3px solid grey;
  border-radius: 3px;
}

input:-webkit-autofill {
  border: 3px solid blue;
}
input:autofill {
  border: 3px solid blue;
}
</pre
      >
      <p>
        *See autocomplete options:
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete"
          >The HTML autocomplete attribute</a
        >
      </p>
    </section>
  </div>
</template>

<style scoped>
section + section {
  padding-top: 10px;
}

/* example :autofill */
input {
  border: 3px solid grey;
  border-radius: 3px;
}

input:-webkit-autofill {
  border: 3px solid blue;
}
input:autofill {
  border: 3px solid blue;
}

/* */
</style>
