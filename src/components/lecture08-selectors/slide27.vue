<template>
  <div class="slide">
    <hr />
    <h3></h3>
    <section>
      <a
        target="_blank"
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/:empty"
        ><code>:empty</code></a
      >
      <p>
        Represents an element with no children other than white-space
        characters.
      </p>
    </section>
    <section class="inline">
      <div class="box"><!-- I will be lime. --></div>
      <div class="box">I will be pink.</div>
      <div class="box">
        <!-- I will be pink in older browsers because of the whitespace around this comment. -->
      </div>
      <div class="box">
        <p>
          <!-- I will be pink in all browsers because of the non-collapsible whitespace and elements around this comment. -->
        </p>
      </div>
    </section>
    <section>
      <pre>
          <code>
.box:empty {
  background: lime;
}

    section class="inline"
      div class="box"><!-- I will be lime. -->/div>
      div class="box">I will be pink./div>
      div class="box">
        <!-- I will be pink in older browsers because of the whitespace around this comment. -->
      /div>
      div class="box">
        p>
          <!-- I will be pink in all browsers because of the non-collapsible whitespace and elements around this comment. -->
        /p>
      /div>
    /section>
            </code>
        </pre>
    </section>
  </div>
</template>

<style scoped>
.inline {
  display: flex;
}

.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
</style>
