<template>
  <div class="slide">
    <hr />
    <h3>Nesting</h3>
    <div class="two-columns">
      <div class="example example--w100">
        .sidebar li { <br />
        <div class="tab">...<br /></div>
        }<br />
      </div>
      <div class="example example--w100">
        .sidebar { <br />
        <div class="tab">... <br /><br /></div>
        <div class="tab">
          li { <br />
          <div class="tab">
            ... <br />
            <br />

            &amp;:last.child { <br />
            <div class="tab">... <br /><br /></div>
            }<br />
          </div>
          } <br />
        </div>
        } <br />
        <br />
        .btn, <br />
        .btn--action{ <br />
        <div class="tab">
          ...<br /><br />
          &amp;:hover{<br />
          ...<br /><br />
          }
        </div>
        }
      </div>
    </div>
  </div>
</template>
