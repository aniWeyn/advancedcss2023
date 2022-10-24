<template>
  <div class="slide">
    <hr />
    <h3>Cascade</h3>
    <p>Stylesheets cascade — at a very simple level, this means that the order of CSS rules matters; when two rules apply that have equal specificity, the one that comes last in the CSS is the one that will be used.</p>
    <p class="sources"> <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#the_cascade">Source: Cascade and inheritance. The Cascade.</a> </p>
    <p>The CSS cascade algorithm's job is to select CSS declarations in order to determine the correct values for CSS properties.</p>
    <p>CSS declarations originate from different origins: </p>
      <ul>
        <li>
      <strong>the User-agent stylesheets</strong> (The browser has a basic style sheet that gives a default style to any document),</li> 
      <li><strong>the Author stylesheets</strong> (The author of the page defines the styles for the document using one or more stylesheets, which define the look and feel of the website — its theme),</li>  
      <li><strong>the User stylesheets</strong> (The user (or reader) of the web site can choose to override styles in many browsers using a custom user stylesheet designed to tailor the experience to the user's wishes).</li>
      </ul>
    <p class="sources"> <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade">Source: Introducing the CSS Cascade</a> </p>

     
  </div>
</template>