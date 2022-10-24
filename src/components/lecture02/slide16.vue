<template>
  <div class="slide">
    <hr />
    <h3>BEM - block _ _ element - - modifier</h3>
    <p>block-name _ _ element-name - - modifier</p>
    <div class="three-columns--equal">
      <div>
        <h4>Block</h4>
        <p class="italic">
          "A functionally independent page component that can be reused. In
          HTML, blocks are represented by the class attribute."
        </p>
        <p>The block name describes its purpose:</p>
        <p>
          <span class="bold">What is it?</span> <br />
          could be menu or button, etc....
        </p>
        <div class="example example--w100">
          .button { <br />
          <div class="tab">text-transform: uppercase;</div>
          }
        </div>
      </div>
      <div>
        <h4>Element</h4>
        <p class="italic">
          "A composite part of a block that can't be used separately from it."
        </p>
        <p>The element name describes its purpose:</p>
        <p>
          <span class="bold">What is this?</span> <br />
          could be item, text, etc.
        </p>
        <div class="example example--w100">
          .button__action { <br />
          <div class="tab">background-color: $themeGreen--light;</div>
          }
        </div>
      </div>
      <div>
        <h4>Modifier</h4>
        <p class="italic">
          "An entity that defines the appearance, state, or behavior of a block
          or element."
        </p>
        <p>The modifier name describes its appearance, state and behavior:</p>
        <p>
          <span class="bold">What size?</span> or
          <span class="bold">Which theme?</span> <br />
          size_s or theme_islands
        </p>
        <p>
          <span class="bold">How is it different from the others?</span> <br />
          disabled, focused, etc.
        </p>
        <p>
          <span class="bold">How does it behave?</span> or
          <span class="bold">How does it respond to the user?</span> <br />
          such as directions_left-top
        </p>
        <div class="example example--w100">
          .button__action--dark { <br />
          <div class="tab">background-color: $themeGreen--dark;</div>
          }
        </div>
      </div>
    </div>
    <span class="sources">
      Source: Methodology. (n.d.). Retrieved January 23, 2021, from
      https://en.bem.info/
    </span>
  </div>
</template>
