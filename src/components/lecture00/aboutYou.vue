<template>
  <div class="slide">
    <hr />
    <Title title="About You!"></Title>
    <p>Ask your group partner following questions and make notes:</p>
    <ol>
      <li>Your name</li>
      <li>Where are you coming from (city, country)?</li>
      <li>Where are you living now? (Gjøvik etc.)</li>
      <li>What is your age?</li>
      <li>
        What are your hobbies? (ex. music, animals, sport, programming, etc.)
      </li>
      <li>What is your favourite vegetable?</li>
      </ol>
      <ol>
      <li>
        What is your programming background? (HTML, CSS, JS, C#, C++, etc.)
      </li>
      <li>
        Which degree program are you involved into? (ex. BWU, BPROG, BTEKD,
        BIXD, BMED, BIDATA)?
      </li>
      <li>
        What operating system are you using? (Windows, MacOS or Linux, etc.)
      </li>
      <li>
        What browser are you using on your personal computer? (Chrom, Frifox,
        etc.)
      </li>
      <li>What operating system have your phone? (Android, iOS, etc.)</li>
      <li>What browser do you use on your phone? (Chrome, Safari, etc.)</li>
    </ol>
    <Title title="Affinity Diagram"></Title>
    <p>Post your sticky notes to the white board, group them by question.</p>
  </div>
</template>

<script>
import Title from "@/components/slides/title";

export default {
  name: "Home",
  components: {
    Title,
  },
};
</script>
