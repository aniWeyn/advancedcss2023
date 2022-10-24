<template>
  <div class="slide">
    <hr />
    <h3>Order of overriding declarations</h3>
    <p>The cascading algorithm determines how to find the value to apply for each property for each document element.</p>
<ol>
  <li>
It first filters all the rules from the different sources to keep only the rules that apply to a given element. That means rules whose selector matches the given element and which are part of an appropriate media at-rule.</li>
<li>Then it sorts these rules according to their importance, that is, whether or not they are followed by !important, and by their origin. The cascade is in ascending order, which means that !important values from a user-defined style sheet have precedence over normal values originated from a user-agent style sheet:</li>
<li>In case of equality, the specificity of a value is considered to choose one or the other.</li>
</ol>
<div>
  <table>
      <thead>
        <tr>
          <th>Origin</th>
          <th>Importance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>user agent</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>user</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>author</td>
          <td>normal</td>
        </tr>
        <tr>
          <td>animations</td>
          <td></td>
        </tr>
        <tr>
          <td>author</td>
          <td><code>!important</code></td>
        </tr>
        <tr>
          <td>user</td>
          <td><code>!important</code></td>
        </tr>
        <tr>
          <td>user agent</td>
          <td><code>!important</code></td>
        </tr>
        <tr>
          <td>transitions</td>
          <td></td>
        </tr>
      </tbody>
    </table></div>
    <p class="sources"> <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#order_of_overriding_declarations" >Order of overriding declarations</a> </p>
  </div>
</template>

<style scoped>
table{
  border-color: black;
}
</style>