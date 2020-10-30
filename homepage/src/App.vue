<template>
  <div id="app">
    <navbar />
    <div class="content pure-g">
      <div class="pure-u-lg-1-5 pure-u-xl-7-24"></div>
      <div class="pure-u-1 pure-u-lg-3-5 pure-u-xl-10-24">
        <router-view />
      </div>
    </div>
    <homepage-footer />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HomepageFooter from "./components/footer.vue";
import Navbar from "./components/navbar.vue";
@Component({
  components: {
    Navbar,
    HomepageFooter,
  },
})
export default class App extends Vue {
  mounted() {
    const translateKey = "pagetitle";
    const translatedPageTitle = this.$i18n.t(translateKey) as string;
    const title = document.querySelector("title");

    if (translatedPageTitle !== translateKey && title) {
      title.textContent = translatedPageTitle;
    }
  }
}
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

html,
body,
#app {
  min-height: 100vh; // fixme doesnt work out?
}

body {
  background-color: $c_bg;
  height: 100%;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  color: $c_font;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: stretch;

  .content {
    padding: 1em;
    flex-grow: 2;
  }

  .pure-button {
    font-family: $font_serif;
    background: $c_primary_dark;
    color: white;
  }
}

a {
  text-decoration: none;
  color: $c_primary;
  &:hover {
    color: $c_font;
    text-decoration: underline;
  }
}

html,
input,
select,
textarea,
#app .pure-g [class*="pure-u"] {
  font-family: $font_sans_serif;
  font-size: 18px;
  color: $c_font;
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
