<template>
  <div class="slide">
    <hr />
    <h3>Linguistic pseudo classes</h3>
    <p>
      These pseudo-classes reflect the document language, and enable the
      selection of elements based on language or script direction.
    </p>
    <p>
      <strong>:lang</strong> <br />
      Select an element based on its content language.
    </p>
    <div class="two-columns">
      <div>
        <img
          class="img"
          src="../../assets/images/lecture08-linguistic-pseudo-classes.png"
          alt="Example of adjacent sibling combinator"
        />
        <br />
        <br />
        <img
          class="img"
          src="../../assets/images/lecture08-linguistic-pseudo-classes_css.png"
          alt="Example of adjacent sibling combinator"
        />
      </div>
      <div>
        <div lang="en">
          <q>This English quote has a <q>nested</q> quote inside.</q>
        </div>
        <div lang="fr">
          <q>This French quote has a <q>nested</q> quote inside.</q>
        </div>
        <div lang="de">
          <q>This German quote has a <q>nested</q> quote inside.</q>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
:lang(en) > q {
  quotes: "\201C""\201D""\2018""\2019";
}
:lang(fr) > q {
  quotes: "« " " »";
}
:lang(de) > q {
  quotes: "»" "«" "\2039""\203A";
}
</style>
