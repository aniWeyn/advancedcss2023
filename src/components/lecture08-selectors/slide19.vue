<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:read-only"
        ><code>:read-only</code></a
      >
      <p>Represents any element that cannot be changed by the user.</p>
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:read-write"
        ><code>:read-write</code></a
      >
      <p contenteditable>Represents any element that is user-editable.</p>
    </section>
    <section>
      <pre>
          <code>
p {
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
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
p {
  font-size: 150%;
  padding: 5px;
  border-radius: 5px;
}

p:read-only {
  background-color: red;
  color: white;
}

p:read-write {
  background-color: lime;
}

/* */
</style>
