<template>
  <div class="lecture">
    <Slide00 title="Deployment to GitHub Pages" />
    <div class="slide">
      <hr />
      <h3>What are GitHub Pages?</h3>
      <p>GitHub Pages are public webpages hosted and published through GitHub.</p>
      <p>GitHub Pages is a static site hosting service that takes HTML, CSS, and JavaScript files straight from a repository on GitHub, optionally runs the files through a build process, and publishes a website.</p>
    </div>
    <div class="slide">
      <hr />
      <h3>How to deploy project to GitHub Pages?</h3>
      <h4>Step 1</h4>
      <p>On GitHub open your repository Settings</p>
      <figure>
        <img
          src="../../assets/images/githubtutorial_1.png"
          alt="Screenshot of Step 1"
        />
      </figure>
    </div>
    <div class="slide">
      <hr />
      <h4>Step 2</h4>
      <p>Open "Pages" tab from left menu</p>
      <figure>
        <img
          src="../../assets/images/githubtutorial_2.png"
          alt="Screenshot of Step 2"
        />
      </figure>
    </div>
    <div class="slide">
      <hr />
      <h4>Step 3</h4>
      <p>Select your main branch with all changes.</p>
      <figure>
        <img
          src="../../assets/images/githubtutorial_3.png"
          alt="Screenshot of Step 3: "
        />
      </figure>
    </div>
    <div class="slide">
      <hr />
      <h4>Step 4</h4>
      <p>
        Keep /(root) for simple html-css-js projects like the ones for Advanced
        CSS. <br />You may want to consider alternative options in more complex
        projects (for example when you will use js framework).
      </p>
      <figure>
        <img
          src="../../assets/images/githubtutorial_4.png"
          alt="Screenshot of Step 4"
        />
      </figure>
    </div>
    <div class="slide">
      <hr />
      <h4>Step 5</h4>
      <p>
        Once your project is deployed, you'll be able to access a link to your
        github page. <br />

        If your project is small, you can refresh the page after about a minute.
      </p>
      <figure>
        <img
          src="../../assets/images/githubtutorial_6.png"
          alt="Screenshot of Step 5"
        />
      </figure>
    </div>
    <div class="slide">
      <hr />
      <h4>In case of problems</h4>
      <p>
        If your styles are not loading, check the path of your main css file.
        <br />You may need to remove some forward slashes ('/') from the file
        path.
      </p>
      <figure>
        <img
          src="../../assets/images/githubtutorial_5.png"
          alt="Screenshot of IDE with basic HTML index page and link tag to file with main CSS style."
        />
      </figure>
      <p>
        If your page did not deploy correctly, you will receive an email message with more details.
      </p>
      <figure>
        <img
          src="../../assets/images/githubtutorial_7.png"
          alt="Screenshot of email from GitHub with listed errors."
        />
      </figure>
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/slides/title.vue";

export default {
  name: "Lecture00",
  components: {
    Slide00,
  },
};
</script>

<style scoped>
img {
  width: 90vh;
}

figcaption {
  font-size: medium;
}
</style>
