<template>
  <div class="lecture">
    <Slide00 title="Assignment 2 - Common mistakes or things to improve" />
    <div class="slide">
      <hr />
      <h4>GitHub</h4>
      <h5>Not using GitHub Classroom link</h5>
      <h5>Little contribution of one of members</h5>
      <h6>Only contribution to readme.md</h6>
      <p>
        Markdown is a syntax that offers various styling options. Therefore, if
        someone is solely responsible for creating a readme.md file, they should
        aim to do an exceptional job.
      </p>
      <h5>Group contribution but only from one student account</h5>
      <p>
        To ensure your contributions are visible and tracked, it's important to
        start by creating the project in GitHub Classroom and then contribute to
        it from your own GitHub account. This way, your work is clearly linked
        to the project and can be easily identified and reviewed.
      </p>
      <p>
        You are welcome to use pair programming for your project. Pair
        programming is when two programmers work together on a single
        workstation, with one person typing and the other person reviewing and
        providing feedback in real-time. This can be a very effective way to
        catch errors early, share knowledge, and improve overall code quality.
        However, it's important to remember to switch pairs regularly so that
        everyone on the team has a chance to practice coding, source control,
        and other key skills.
      </p>
    </div>
    <div class="slide">
      <hr />
      <h4>Readme.md</h4>
      <p>
        Creating a well-crafted readme.md file is important as it is often the
        first point of reference for users and contributors to a project, and
        can greatly impact their understanding and adoption of the project.
        Therefore, it is advisable to put in the effort to ensure the readme.md
        file is clear, informative, and well-structured.
      </p>
      <p>
        Markdown is a lightweight markup language used to format and style plain
        text. It was developed with the aim of making it easy to write
        structured documents without needing to know HTML or other complex
        formatting languages.
      </p>
      <p>
        Markdown is widely used for creating documentation, especially in
        software development, because of its simplicity and ease of use, making
        it accessible to users with little to no programming experience.
      </p>
      <h5>Turning in incomplete or error-filled written work</h5>
      <p>
        To ensure that your written content is of high quality, I recommend that
        you run it through a grammar checking service. This can help you
        identify any errors in grammar, punctuation, or spelling that you may
        have missed. Using such services can significantly improve the
        readability and effectiveness of your work, helping you to better
        communicate your ideas to your intended audience.
      </p>
      <h5>Answering question: "How users can get started with the project"</h5>
      <p>
        Detailed, easy-to-follow set of instructions on how to prepare and start
        your project for developers.
      </p>
      <h5>Answering question: "Where users can get help with your project"</h5>
      <p>
        Users should create a new issue detailing concern or question on the
        project's GitHub repository to request help or support. If there are
        other channels through which users can contact the project team for help
        or support, it is helpful to include those in the message as well, such
        as email or a community forum.
      </p>
      <figure>
        <img
          src="../../assets/images/assignment2_feedback_issues.png"
          alt="Screenshot of GitHub menu with open Issues tab."
        />
      </figure>
      <p></p>
      <a href="https://www.makeareadme.com/" target="_blank"
        >https://www.makeareadme.com/</a
      >
      <a href="https://commonmark.org/help/tutorial/" target="_blank"
        >https://commonmark.org/help/tutorial/</a
      >
    </div>
  </div>
</template>

<script>
import Slide00 from "@/components/slides/title.vue";

export default {
  name: "Assignment02Feedback",
  components: {
    Slide00,
  },
};
</script>

<style>
img {
  width: 60vw;
}
</style>
