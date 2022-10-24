<template>
  <div class="slide">
    <hr />
    <h3>CSSOM</h3>
    <p>The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically.</p>
     <p class="sources"> <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/API/CSS_Object_Model" >Source: CSS Object Model</a> </p>
     <p>The DOM contains all the content of the page. <br/>The CSSOM contains all the information on how to style the DOM.</p>
     <p>CSS is render blocking: <strong>the browser blocks page rendering until it receives and processes all of the CSS</strong>. CSS is render blocking because rules can be overwritten, so the content can't be rendered until the CSSOM is complete.</p>
     <p class="sources"> <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Performance/Critical_rendering_path" >Source: Critical rendering path</a> </p>


     
  </div>
</template>