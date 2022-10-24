<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:default"
        ><code>:default</code></a
      >
      <p>
        Matches one or more UI elements that are the default among a set of
        elements.
      </p>
    </section>
    <section>
      <fieldset>
        <legend>Favorite season</legend>

        <input type="radio" name="season" id="spring" />
        <label for="spring">Spring</label>

        <input type="radio" name="season" id="summer" checked />
        <label for="summer">Summer</label>

        <input type="radio" name="season" id="fall" />
        <label for="fall">Fall</label>

        <input type="radio" name="season" id="winter" />
        <label for="winter">Winter</label>
      </fieldset>
    </section>

    <section>
      <pre>
          <code>
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
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
input:default {
  box-shadow: 0 0 2px 1px coral;
}

input:default + label {
  color: coral;
}

/* */
</style>
