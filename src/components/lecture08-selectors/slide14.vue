<template>
  <div class="slide">
    <hr />
    <a
      target="_blank"
      href="https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes#user_action_pseudo-classes"
    >
      <h3>User action pseudo-classes</h3></a
    >
    <p>
      These pseudo-classes require some interaction by the user in order for
      them to apply, such as holding a mouse pointer over an element.
    </p>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:hover"
        ><code>:hover</code></a
      ><br />
      Matches when a user designates an item with a pointing device, for example
      holding the mouse pointer over it.
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:active"
        ><code>:active</code></a
      ><br />
      Matches when an item is being activated by the user, for example clicked
      on.
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus"
        ><code>:focus</code></a
      ><br />
      Matches when an element has focus.
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible"
        ><code>:focus-visible</code></a
      ><br />
      Matches when an element has focus and the user agent identifies that the
      element should be visibly focused.
    </section>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-within"
        ><code>:focus-within</code></a
      ><br />
      Matches an element to which :focus applies, plus any element that has a
      descendant to which :focus applies.
    </section>
  </div>
</template>

<style scoped>
section + section {
  padding-top: 10px;
}
</style>
