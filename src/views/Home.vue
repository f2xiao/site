<template>
  <div class="home">
    <div class="Intro">
      <header><h1>Fangfang</h1></header>
      <p>
        <strong>Software Fullstack Developer.</strong> Enjoy buidling apps.
        Write JavaScript/Typescript, HTML and CSS.
      </p>
      Techstack that I work with:
      <ul>
        <li>Frontend: React, Vue, Sass</li>
        <li>Backend: NodeJS, ExpressJS</li>
        <li>Database: MongoDB, MySQL</li>
      </ul>
      Love the idea of OOP and abstraction of complex concepts.
      <p>
        Formerly worked as an mechanical engineer in automotive industry,
        specialized in CAD modeling and process engineering. Found passion in
        coding and started the path as a developer.
      </p>
      <p>
        When not coding, I play games (mostly Fortnite), watch animes and spend
        time with my family as much as possible.
      </p>
      <p>
        Know me more, at <a href="https://github.com/f2xiao">Github</a>,
        <a href="./fangfang-xiao CV.pdf">CV</a>,
        <a href="https://www.linkedin.com/in/fangfang-xiao">Linkedin</a>
      </p>
    </div>
    <div class="projects">
      <h2>Projects</h2>
      <div v-for="project in projects.slice(0, 2)" :key="project.title">
        <a class="left" :href="project.link" target="_blank">{{
          project.title
        }}</a>
        <button class="right disabled">
          <span>{{ project.tags.join() }}</span>
        </button>
      </div>
      <div v-for="project in projects.slice(-1)" :key="project.title">
        <router-link class="left" :to="project.link">{{
          project.title
        }}</router-link>
        <button class="right disabled">
          <span>{{ project.tags.join() }}</span>
        </button>
      </div>
    </div>
    <div class="posts" v-bind:style="{ padding: '2.5rem 0' }">
      <h2><router-link to="/posts">Posts</router-link></h2>
      <div v-for="post in posts" :key="post.filename">
        <router-link
          :to="{
            path: '/posts/' + post.filename,
            params: { fileName: post.filename },
          }"
          >{{ post.filename }}</router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "Home",
  computed: mapState({
    posts: (state) => state.posts.slice(0, 3),
    projects: (state) => state.projects,
  }),
};
</script>
<style lang="scss">
@media screen and (max-width: 480px) {
  // header{
  //   padding-top: 0.5em;
  // }
}
.projects {
  div {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  .left {
    width: 30%;
    margin-right: 5%;
  }

  .right {
    position: absolute;
    // padding: 0 1%;
    right: 0;
  }

  @media screen and (max-width: 480px) {
    .left {
      min-width: 100%;
    }
    .right {
      position: inherit;
      font-size: 0.8em;
    }
  }

  a,
  span {
    // margin: 0.25em 0;
    vertical-align: middle;
  }
}
</style>
