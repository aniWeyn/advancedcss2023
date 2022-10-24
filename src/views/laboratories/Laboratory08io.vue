<template>
  <div class="container">
    <div>
      <h2>Lazy loading</h2>
    </div>
    <h3>Exercise</h3>
    <section>
      <hr />
      <h4>Exercise 1</h4>
      <p>Copy to index.html</p>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;!doctype html>

&lt;html lang="en">
&lt;head>
  &lt;meta charset="utf-8">

  &lt;title>Intersection Observer&lt;/title>
  &lt;meta name="description" content="Intersection Observer">
  &lt;meta name="author" content="Sabina Niewiadomska">

  &lt;link rel="stylesheet" href="assets/styles/index.css">

&lt;/head>

&lt;body>
  &lt;div>
    &lt;section class="p1">
      &lt;h3>Section 1&lt;/h3>
    Rocky road chocolate chip cookie dough chocolate almonds cookies and cream, oreos salted caramel syrup chocolate chip pistachio. Rainbow sprinkles cookies and cream caramel syrup marshmallows neopolitan brownie bits. Gummy worms strawberries hot fudge mint chocolate chip dark chocolate chocolate chip peanut butter cookies and cream oreos vanilla strawberry chocolate salted caramel syrup neopolitan. Brownie bits cherry chocolate chip, chocolate chocolate chip cookie dough whipped cream caramel syrup chocolate syrup coffee. Gummy worms salted caramel syrup oreos mint, vanilla strawberries rainbow sprinkles oreos rainbow sprinkles marshmallows almonds chocolate syrup m&m's salted caramel syrup.
    &lt;/section>
    &lt;section class="p2">
      &lt;h3>Section 2&lt;/h3>
      Cookies and cream whipped cream almonds chocolate sprinkles, cake batter brownie bits peanuts chocolate sprinkles cherry peanut butter cups rainbow sprinkles chocolate chip cookie dough. Vanilla pistachio neopolitan chocolate syrup. Peanut butter cups strawberry vanilla, marshmallows almonds dark chocolate neopolitan salted caramel syrup blueberries cake batter rocky road french vanilla chocolate chips whipped cream. Bananas chocolate syrup mint chocolate chip cookies and cream mint chocolate chip cake batter. Gummy worms vanilla cookie dough whipped cream. Vanilla mint chocolate chip cake batter cherry vanilla neopolitan french vanilla hot fudge chocolate chip cookie dough. Mint chocolate chip neopolitan cake batter pistachio vanilla.
    &lt;/section>
    &lt;section class="p3">
      &lt;h3>Section 3&lt;/h3>
      Kitkat mint chocolate chip vanilla m&m's coffee pistachio chocolate chip. Strawberries mint m&m's salted caramel syrup coffee strawberry almonds Vanilla vanilla chocolate chip cookie dough m&m's brownie bits peanut butter. Cake batter peanut butter cookies and cream, rocky road peanuts strawberries coffee chocolate syrup almonds neopolitan m&m's chocolate sprinkles. Gummy worms chocolate sprinkles bananas chocolate syrup gummy worms, neopolitan cake batter mint chocolate chip. Blueberries chocolate syrup peanut butter caramel syrup m&m's chocolate chip cookie dough cookie dough brownie bits chocolate chip oreos chocolate syrup chocolate sprinkles. Rocky road chocolate chip Vanilla gummy worms brownie bits rocky road almonds french vanilla bananas whipped cream.
    &lt;/section>
    &lt;section class="p4">
      &lt;h3>Section 4&lt;/h3>
      Salted caramel syrup chocolate chips peanut butter chocolate sprinkles, dark chocolate oreos bananas. Bananas cherry chocolate chocolate sprinkles chocolate pistachio chocolate chip chocolate sprinkles peanuts neopolitan mint chocolate almonds cookie dough brownie bits. Coffee bananas pistachio mint marshmallows chocolate chip strawberries gummy worms dark chocolate. Brownie bits marshmallows chocolate syrup, chocolate chip cookie dough mint kitkat cookies and cream chocolate chocolate chip strawberries marshmallows french vanilla peanut butter cups peanut butter cups strawberry. Chocolate chip m&m's mint chocolate chip french vanilla cherry chocolate chip cookie dough. Pistachio rocky road hot fudge almonds caramel syrup blueberries peanuts chocolate bananas rainbow sprinkles bananas strawberries Strawberries peanuts whipped cream. Kitkat mint chocolate chip cake batter, rainbow sprinkles cherry rainbow sprinkles cookie dough neopolitan brownie bits pistachio peanut butter whipped cream french vanilla chocolate whipped cream.
    &lt;/section>
    &lt;section class="p5">
      &lt;h3>Section 5&lt;/h3>
      Blueberries peanut butter cups peanut butter chocolate chip chocolate chips whipped cream kitkat peanut butter cups strawberries. Cookie dough almonds cherry chocolate sprinkles peanut butter chocolate chip coffee coffee chocolate chip dark chocolate chocolate chip cookie dough french vanilla chocolate chips cookie dough. Pistachio salted caramel syrup peanuts Brownie bits. Vanilla salted caramel syrup dark chocolate coffee strawberries. Dark chocolate strawberry chocolate chip cookie dough hot fudge mint chocolate chip salted caramel syrup, m&m's cookie dough oreos peanut butter cups chocolate syrup strawberries.
    &lt;/section>
  &lt;/div>
&lt;/body>
&lt;script src="intersectionObserver01.js">&lt;/script>
&lt;/html>



&lt;style>
  div {
  margin: 50px 300px;
}

section {
  margin: 750px 0px;
  border-radius: 20px;
}

.green{
  padding: 20px;
  border-radius: 40px;
  background-color: #C2EABA;
  color:rgb(55, 40, 40);
  letter-spacing: 2px;
  transition: background-color 1s, padding 1s, border-radius 3s, color 3s, font-weight 3s, letter-spacing 3s;
}
&lt;/style>
</pre
            >
          </code>
          <section>
            <h4>Task 1</h4>
            <ul>
              <li>Create intersectionObserver01.js</li>
              <li>Select all elements with selector .p1</li>
              <li>Initiate options</li>
              <li>Create observer</li>
              <li>Observ</li>
              <li>Test the code</li>
            </ul>
            <code>
              <pre>
// select all elements with selector .p1
const p1 = document.querySelector(".p1");

// initiate options
const options = {};

//create observer

//definition: const observer = new IntersectionObserver(callback, options);

const observer = new IntersectionObserver(function (entries, observer) {},
options);

//observe
observer.observe(p1);
          </pre
              >
            </code>
          </section>
          <section>
            <h4>Task 2</h4>
            <p>
              Replace the observer code with below one. Check the result in
              console. What is happening when div with class .p1 appears in the
              view and what is happening when it disappears?
            </p>
            <code>
              <pre>
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry);
  });
}, options);
          </pre
              >
            </code>
          </section>
          <section>
            <h4>Task 3</h4>
            <p>
              Replace <code>console.log(entry);</code> with
              <code>console.log(entry.target);</code> Check the result in the
              console.
            </p>
            <code>
              <pre>
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.target);
  });
}, options);
          </pre
              >
            </code>
          </section>
          <section>
            <h4>Task 4</h4>
            <p>
              Replace options with below code. Observe how the behaviour of .p1
              has change. Experiment with root, tresshold and rootMargin values.
            </p>
            <code>
              <pre>
const options = {
  root: null, // the view port
  treshold: 0, //between 0 and 1, default 0, when at 0 - as soon as any part arrives there it will be fired
  rootMargin: "-150px", //like margin on viewport, px or %
};
          </pre
              >
            </code>
          </section>
          <section>
            <h4>Task 5</h4>
            <p>
              Select all sections and adjust the code to work with multiple
              sections.
            </p>
            <code>
              <pre>
const sections = document.querySelectorAll("section");

const options = {
  root: null,
  treshold: 0,
  rootMargin: "0px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.target, entry);
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// will display on is isIntersecting true and false
          </pre
              >
            </code>
          </section>
          <section>
            <h4>Task 6</h4>
            <p>Replace the code with below example and analyze behaviour.</p>
            <code>
              <pre>
const sections = document.querySelectorAll("section");

const options = {
  root: null,
  treshold: 0,
  rootMargin: "-250px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("green");
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

          </pre
              >
            </code>
          </section>
          <section>
            <h4>Task 7</h4>
            <p>
              Unobserve element after intersecting (<code>
                observer.unobserve(entry.target);</code
              >)
            </p>
            <code>
              <pre>
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    console.log(entry.target);
    entry.target.classList.toggle("green");

    // UNOBSERVE
    observer.unobserve(entry.target);
  });
}, options);
          </pre
              >
            </code>
          </section>
        </div>
      </div>
    </section>
    <hr />
  </div>
</template>

<style scoped>
.two-columns {
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr);
  gap: 20px;
}

section {
  padding: 60px 0px;
}
</style>
