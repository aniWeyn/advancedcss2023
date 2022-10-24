<template>
  <div class="slide">
    <hr />
    <h3>What is my page performance?</h3>
    <p>Below screenshots shows how to simulate different Internet connection types. Try it on your own!</p>
    <h6>Network</h6>
    <img
      class="img"
      src="../../assets/images/lecture09-network.png"
      alt="Chrome Network"
    />
    <h6>Disable Cache</h6>
    <p>
      To simulate that someone is on the page for the first time or their
      browsers' cache was cleaned up.
    </p>
    <img
      class="img"
      src="../../assets/images/lecture09-disableCache.png"
      alt="Chrome Disable Cache"
    />
    <h6>Testing speed</h6>
    <p>
      Not always our users will have the newest smartphones and access to WiFi
      or 5G.
    </p>
    <img
      class="img"
      src="../../assets/images/lecture09-throttling.png"
      alt="Chrome test speed"
    />
    <img
      class="img"
      src="../../assets/images/lecture09-throttling-2.png"
      alt="Chrome test speed"
    />
    <h6>Results</h6>
    <p></p>
    <img
      class="img"
      src="../../assets/images/lecture09-throttling-slow-3g-example.png"
      alt="Example of slow files on 3G network"
    />
  </div>
</template>

<style>
img.img {
  width: 40%;
}
</style>
