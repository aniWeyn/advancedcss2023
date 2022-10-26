<template>
  <div class="wrapper">
    <article class="content">
      <div class="slide1">
      <h1 class="title">Advanced CSS</h1>
            <hr>
      </div>
      <div class="list">
        <div class="subtitle">
      <h2>Part 1 - basics review</h2>
        </div>
      <div class="day">
       <div class="date">
        <h4>January 10, 2022</h4>
      </div>
      <div class="topics">
      <ol>
        <li>
          <router-link to="/lecture00"
            >Course organisation, schedule and assignments</router-link
          >
        </li>
      </ol>
      <ol start="2">
        <li>
          <router-link to="/lecture01"
            >CSS resources and scrollytelling</router-link
          >
        </li>
        <li>
          <router-link to="/interactionsOnWeb">Interactions on Web</router-link>
        </li>
      </ol>
      </div>
      </div>
      <div class="day">
       <div class="date">
        <h4>January 11, 2022</h4>
      </div>
      <div class="topics">
      <ol start="4">
        <li>
          <router-link to="/intersectionObserver"
            >JavaScript - Intersection Observer</router-link
          >
        </li>
        <li>
          <router-link to="/labcodepen"
            >Lab: Introduction to CodePen
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory08io"
            >Lab: Introduction to Intersection Observer API
          </router-link>
        </li>
      </ol>
      <ol start="7">
        <li>
          <router-link to="/lectures/lecture02">Architecting CSS</router-link>
        </li>
        <li>
          <router-link to="/lectures/lecture04"
            >Preprocessors with focus on SASS
          </router-link>
        </li>
        <li>
          <router-link to="/lectures/lecture05">CSS Variables </router-link>
        </li>
      </ol>
      <ol start="10">
        <li>
          <router-link to="/lectures/lecture08">CSS Selectors </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07"
            >Lab: CSS Selectors - Combinators
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07_02"
            >Lab: CSS Selectors - Attribute Selectors
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07_03"
            >Lab: CSS Selectors: pseudo classes - :nth-child()
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory07_04"
            >Lab: CSS Selectors: pseudo classes - :nth-last-child()
          </router-link>
        </li>
      </ol>
      </div>
      </div>
      <div class="day">
       <div class="date"><h4>January 12, 2022</h4>
       </div>
       <div class="topics">
      <ol start="11">
        <li>
          <router-link to="/cssshapes">CSS Shapes </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory06a-tasks"
            >Lab: CSS Shapes with border-radius</router-link
          >
        </li>
      </ol>
      <ol start="13">
        <li>
          <router-link to="/labintersectionobservercssselectors"
            >Lab: Intersection Observer + CSS Shapes and Selectors</router-link
          >
        </li>
      </ol>
      <ol start="14">
        <li>
          <router-link to="/transformations">Transformations </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory06b"
            >Lab: CSS Transform</router-link
          >
        </li>
        <li>
          <router-link to="/labsharing1">Your work!</router-link>
        </li>
      </ol>
      </div>
      </div>
      <div class="day">
       <div class="date"><h4>January 13, 2022</h4></div>
       <div class="topics">
      <ol start="20">
        <li><strong>Guest lecture - Felipe Hefler</strong></li>
        <li>
          <router-link to="/transitions">Transitions </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory06c"
            >Lab: CSS Transitions</router-link
          >
        </li>
        <li>
          <router-link to="/CSSanimations">Animations </router-link>
        </li>
      </ol>
      <ol start="24">
        <li>
          <router-link to="/labintersectionobservercssselectors"
            >Lab: Intersection Observer + Transformations, Transitions and
            Animations</router-link
          >
        </li>
      </ol>
      </div>
      </div>
      <div class="subtitle">
      <h2>Part 2 - Creative use of CSS</h2>
      </div>
      <div class="day">
       <div class="date"> <h4>January 14, 2022</h4></div>
       <div class="topics">
      <ol start="25">
        <li>Requirements for Assignent 1</li>
      </ol>
      </div>
      </div>
      <div class="day">
       <div class="date"><h4>February 14, 2022</h4></div>
       <div class="topics">
      <ol start="26">
        <li>
          <router-link to="designingForAnimation"
            >Designing for animation
          </router-link>
        </li>
        <li>
          <router-link to="designingforanimationlab"
            >Lab: Designing for animation
          </router-link>
        </li>
      </ol>
      <ol start="28">
        <li>
          <router-link to="accessibility"
            >Accessibility in CSS (A11y)
          </router-link>
        </li>
      </ol>
      </div>
      </div>
      <div class="day">
       <div class="date"><h4>February 15, 2022</h4></div>
       <div class="topics">
      <ol start="29">
        <li>
          Requirements for Assignment 2
        </li>
      </ol>
      <ol start="30">
        <li>
          <router-link to="/laboratories/laboratory01"
            >Lab: Visual Studio Code</router-link
          >
        </li>
        <li>
          <router-link to="/laboratories/laboratory03"
            >Lab: SASS... what was that?</router-link
          >
        </li>
      </ol>
      </div>
      </div>
      <div class="day">
       <div class="date"><h4>March 14, 2022</h4></div>
       <div class="topics">
      <ol start="32">
        <li>
          <router-link to="/svg">Introduction to SVG </router-link>
        </li>
        <li>
          <router-link to="/svgDrawing"
            >Lab: Drawing basic SVG shapes
          </router-link>
        </li>
      </ol>
      <ol start="34">
        <li>Guest Lecture: Moderninzing UI on Enterprise level</li>
      </ol>
      <ol start="35">
        <li>
          <router-link to="/svgAnimationSMIL">Animating SVG</router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory05"
            >Lab: Animating SVG</router-link
          >
        </li>
      </ol>
      <ol start="37">
        <li>
          <router-link to="/keyframesCSSVariables"
            >Lab: Keyframes + CSS Variables</router-link
          >
        </li>
      </ol>
      </div>
      </div>
      <div class="day">
       <div class="date"><h4>March 15, 2022</h4></div>
       <div class="topics">
      <ol start="38">
        <li>
          Requirements for Assignment 3
        </li>
      </ol>
      </div>
      </div>
      <div class="day">
       <div class="date"><h4>April 4, 2022</h4></div>
       <div class="topics">
      <ol start="39">
        <li>
          <router-link to="/scrollama">
          Scrollytelling: Scrollama
          </router-link>
        </li>
        <li>
          <a target="_blank" href="https://github.com/aniWeyn/scrollama_intro">
          Lab: Scrollama Introduction
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/aniWeyn/scrollama_svg">
          Lab: Scrollama and SVG
          </a>
        </li>
      </ol>
      <ol start="42">
        <li>
          <router-link to="/githubpages">
          GitHub Pages
           </router-link>
        </li>
      </ol>
      <ol start="43">
        <li>
          <router-link to="/cssUnits">CSS Units </router-link>
        </li>
      </ol>
      <ol start="44">
        <li>
          <router-link to="/flexGrid">Flexbox and CSS Grid </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory09flex"
            >Lab: Flexbox
          </router-link>
        </li>
        <li>
          <router-link to="/laboratories/laboratory09grid"
            >Lab: CSS Grid
          </router-link>
        </li>
      </ol>
      <ol start="47">
        <li>
          Prepresentations of Assignmnet 3 within groups
        </li>
      </ol>
      </div>
      </div>
      <div class="day">
       <div class="date"><h4>April 25, 2022</h4></div>
       <div class="topics">
      <ol start="48">
        <li>
          <router-link to="/rootsofwebandcss">
          Why the Web and CSS is the way it is??
          </router-link>
        </li>
      </ol>
      <ol start="49">
        <li>
          <router-link to="/performance">
          Performance (lazy loading, core web vitals)
          </router-link>
        </li>
        <!--
        <li>
          <router-link to="/laboratories/laboratory08">
          Lab: Lazy Loading
          </router-link>
        </li>-->
      </ol>
      <ol start="50">
        <li>
          <router-link to="/lectures/lecture09">
          CSS Frameworks and Design Systems
          </router-link>
        </li>
      </ol>
      <ol start="51">
        <li>
          <router-link to="/webframeworksandheadlesscms">
          What are moder frameworks and headless CMS?
          </router-link>
        </li>
      </ol>
      <ol start="52">
        <li>
          Presentations - project exhibitions
        </li>
        <li>Individual Report</li>
      </ol>
      </div>
      </div>
      </div>
    </article>
    <!--     <Navigation /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Navigation from "@/components/Navigation";

export default {
  name: "Home",
  components: {
    //Navigation,
  },
};
</script>

<style scss>
@keyframes leftRight {
  0% {
    opacity: 0;
    width: 0%;
    /*transform: translateX(-10000px);*/
  }
  90%{
    opacity: 0.7;
    width: 50%;
  }
  100% {
    opacity: 1;
    width: 100%;
    /*transform: translateX(0px);*/
  }
}

hr {
  animation: 2s ease-out 0s 1 leftRight;
  width: 100%;
  border-bottom-width: 0px;
}


@keyframes slideUp {
  0% {
    min-height: 100vh;
  }
  90% {
    min-height: 90vh;
  }
  100% {
    min-height: 50vh;
  }
}

.slide1 {
  min-height: 50vh;
  animation: 4s ease-out 0s 1 slideUp;
}

@keyframes welcome {
  0% {
    opacity: 0;
  }
  90%{
    opacity: 0.1;
  }
  100% {
    opacity: 1;
  }
}

.title{
  padding-top: 20vh;
  font-size: 7rem;
  font-weight: 900;
  animation: 2s ease-out 0s 1 welcome;
}

.list a{
  font-weight: 500;
  font-size: 2rem;
  color: #2c3e50;
}

.list li{
  padding-bottom: 16px;
  color: #2c3e50;
}

h2{
  font-size: 4rem;
  font-weight: 900;
  color: #DCDCD5;
}

.subtitle{
  background-color: #2c3e50;
}

.day{
    background-color: aliceblue;
    width: 95vw;
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: flex-start;
    margin-bottom: 60px;
}

.date > h4{
  font-size: 3.5rem;
  margin-top: 16px;
  font-weight: 900;
}
</style>
