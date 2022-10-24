<template>
  <div class="container">
    <div>
      <h2>Lazy loading</h2>
    </div>
    <h3>Exercise</h3>
    <section>
      <hr />
      <h4>Exercise 1</h4>
      <p>
        Read documentation about
        <a
          target="_blank"
          href="https://developer.mozilla.org/en-US/docs/Web/Performance/Lazy_loading"
          >lazy loading</a
        >. With a use of Network section in your browser test how the loading
        time will be improved.
      </p>
      <div class="two-columns">
        <div>
          <h4>Code</h4>
          <code>
            <pre>
&lt;div>
  &lt;h3>Lazy loading&lt;/h3>
  &lt;img src="https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop">
  &lt;img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop">
  &lt;img src="https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop">
  &lt;img src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjB8fGRvZ3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop">
  &lt;img src="https://images.unsplash.com/photo-1578133559556-9e83af5fc5f3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzN8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop">
  &lt;img src="https://images.unsplash.com/photo-1530126483408-aa533e55bdb2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop">
  &lt;img src="https://images.unsplash.com/photo-1571082018075-26972f342ce3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTN8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop">
  &lt;img src="https://images.unsplash.com/photo-1514984879728-be0aff75a6e8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTd8fGRvZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop">
&lt;/div>
</pre
            >
          </code>
          <h4>Task</h4>
          <code>
            <pre>
loading="lazy"
          </pre
            >
          </code>
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
</style>
