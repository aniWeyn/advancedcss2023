<template>
    <div class="slide">

-------------------------------------
        *::selection {
    color: $white;
    background-color: $purple;
  }

a {
  text-decoration: none;
  color: $black;
  
  *:link {
    color: $black;
  }
  
  *:visited {
    color: $purple;
  }
  
  *:hover {
    color: $black;
    font-size: 20px;
  }
  
  *:active {
    color: $purple;
  }
  
}

.truck__foot--1--shadow {
  width: 80%;
  height: 10%;
  background-color: darken($grey, 10%);
  transform: translateY(690%) translateX(10%) rotate(-10deg);
  border-radius: 15% / 80%;
}

.truck__foot--2--shadow {
  width: 80%;
  height: 10%;
  background-color: darken($grey, 10%);
  transform: translateY(665%) translateX(21%) rotate(-10deg);
  border-radius: 15% / 80%;
}

https://codepen.io/mariaamy/pen/dyZbJyY
-------------------------------------

nav {
  ul {
    list-style: none;
    font-size: 20px;
    margin: 5px 0 10px -25px;
    line-height: 75px;
  }
  
    :link {
    color: $border;
    text-decoration: none;
  }
  
    :visited {
    color: $grey;
  }
  
    :hover {
    color: $purple-shadow;
  }
  
    :active {
    text-decoration: underline;
  }
    
}


    </div>
</template>