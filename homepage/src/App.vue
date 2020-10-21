<template>
  <div id="app">
    <navbar />
    <div class="content pure-g">
      <div class="pure-u-lg-1-5 pure-u-xl-7-24"></div>
      <div class="pure-u-1 pure-u-lg-3-5 pure-u-xl-10-24">
        <router-view />
      </div>
    </div>
    <footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Footer from "./components/footer.vue";
import Navbar from "./components/navbar.vue";
@Component({
  components: {
    Navbar,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import "./assets/styles/variables";

@font-face {
  font-family: "Open Sans";
  src: url("./assets/fonts/OpenSans-Light.ttf") format("truetype");
}

@font-face {
  font-family: "Playfair Display";
  src: url("./assets/fonts/PlayfairDisplay-Medium.ttf") format("truetype");
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: $c_bg;
  height: 100%;
  color: $c_font;

  .content {
    padding: 1em;
  }

  .pure-button {
    font-family: $font_serif;
    background: $c_primary;
    color: white;
  }
}

html,
input,
select,
textarea,
#app .pure-g [class*="pure-u"] {
  font-family: $font_sans_serif;
  font-size: 18px;
}

h1,
h2 {
  text-align: center;
  border-bottom: 1px solid $c_primary_light;
  padding: 0.5em;
}

h1,
h2,
h3,
h4,
.pure-g h1,
.pure-g h2,
.pure-g h3,
.pure-g h4 {
  font-family: $font_serif;
}

html {
  line-height: normal;
}
</style>
