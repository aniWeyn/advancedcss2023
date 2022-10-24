<template>
  <div>
    <h3>Preparation for Assignment 2 and Assignment 3</h3>
    Do individually on your PC or Mac
    <h4>Prepare your Visual Studio Code</h4>
    <ul>
      <li>
        Install
        <a target="blank" href="https://code.visualstudio.com/"
          >Visual Studio Code</a
        >
      </li>
      <li>
        Install extensions:
        <a
          target="blank"
          href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass"
          >Live Sass Compiler</a
        >,
        <a
          target="blank"
          href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer"
          >LiveServer</a
        >,
        <a
          target="blank"
          href="https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense"
          >Path Intellisense</a
        >
      </li>
      <li>
        For code styling
        <a
          target="blank"
          href="https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode"
          >Prettier</a
        >, for advanced developers:
        <a
          target="blank"
          href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint"
          >ESLint</a
        >
      </li>
    </ul>
    <h4>Do you have Git?</h4>
    <ul>
      <li><a target="blank" href="https://git-scm.com/">Install Git</a></li>
    </ul>
    <h4>Do you have GitHub?</h4>
    <ul>
      <li>
        Register in <a target="blank" href="https://github.com/">GitHub</a> with
        <strong>student credentials</strong>
      </li>
      <li>
        Exercise your GitHub skills with GitHub tutorial:
        https://guides.github.com/activities/hello-world/
      </li>
      <li>
        Prepare your Visual Studio to work with GitHub:
        <a
          target="_blank"
          href="https://code.visualstudio.com/docs/editor/github"
          >VS Code and GitHub</a
        >
        <br />
        <a target="_blank" href="https://youtu.be/3Tn58KQvWtU"
          >How To Use GitHub with VS Code in 2020</a
        >
      </li>
    </ul>
    <h4>With your group:</h4>
    <ul>
      <li>
        Prepare friendly name of your group
      </li>
      <li>Create Assignment 2 repository</li>
      <li>Invite all group members to the repository</li>
      <li>
        Create Readme file and describe your project (see requirements in
        Assignemnt 2 on Bb).
      </li>
      <li>
        Make every member of the group commit change to the readme file from
        ther PC or Mac
      </li>
      <li>
        Reflect on Separation of Concerns in your project and prepare assets
        folder with style folder where you will add necessary scss files, files
        which represents concerns should start with _nameOfYourConcern.scss join
        separated files in index.scss (see lecture about sass)
      </li>
      <div class="example">
        @import "_nameOfYourConcern"; <br />
        @import "_nameOfYourConcern2";<br />
        @import "_nameOfYourConcern3";
      </div>
      <ul>
        <li>Create a file index.html</li>
        <li>Create folder assets</li>
        <li>In the assets folder create style folder</li>
        <li>In the style folder create a file index.scss and _colors.scss</li>
        <li>
          Add reference to the index.css file to the index.html file (link
          rel="stylesheet" href="assets/styles/index.css")
        </li>
      </ul>
    </ul>
  </div>
</template>
