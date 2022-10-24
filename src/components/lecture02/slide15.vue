<template>
  <div class="slide">
    <hr />
    <h3>OOCSS - Object-Oriented CSS</h3>
    <div class="two-columns">
      <div>
        <h4>What is the object?</h4>
        <p class="italic">
          "Repeating visual pattern, that can be abstracted into <br />
          an independent snippet of HTML, CSS and possibly JavaScript.
          <br />That object can be reused throughout a site"
        </p>
        <span class="sources">
          Stubbornella. (n.d.). OOCSS. Retrieved January 23, 2021, from
          https://github.com/stubbornella/oocss/wiki
        </span>
        <p>Example of object / component:</p>
        <div class="example example--w100">
          &lt;div class="button-navigation"&gt; <br />
          <div class="tab">
            &lt;div> <br />
            <div class="tab">
              &lt;button v-if="render !=0" v-on:click="render -= 1"&gt;Back
              &lt;/button&gt;
            </div>
            &lt;/div&gt;
          </div>
          <div class="tab">
            &lt;div&gt;
            <div class="tab">
              &lt;button v-if="render != 20" v-on:click="render += 1"&gt;Next
              &lt;/button&gt;
            </div>
            &lt;/div&gt;
          </div>
          &lt;/div&gt;
          <br />
        </div>
        <p>
          <a target="_blank" href="https://github.com/stubbornella/oocss/wiki"
            >OOCSS GitHub Wiki</a
          >
        </p>
      </div>
      <div>
        <h4>Separate Structure from the Skin</h4>
        <div class="example example--w100">
          .theme { <br />
          <div class="tab">
            color: $themeGreen; <br />
            background-color: $themeGreen--dark; <br />
          </div>
          }
          <br /><br />
          .button { <br />
          <div class="tab">text-transform: uppercase;</div>
          }
        </div>
        <h4>Separate Container from the Content</h4>
        <div class="example example--w100">
          .button { <br />
          <div class="tab">text-transform: uppercase;</div>
          }
          <br /><br />
          .button__action { <br />
          <div class="tab">background-color: $themeGreen--light;</div>
          }
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
