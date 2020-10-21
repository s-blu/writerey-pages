<template>
  <div id="app">
    <div>
      <navbar />
    </div>
    <div class="content pure-g">
      <div class="pure-u-lg-1-5 pure-u-xl-7-24"></div>
      <div class="pure-u-1 pure-u-lg-3-5 pure-u-xl-10-24">
        <introduction />
        <features />
        <betaHint />
        <getWriterey />
        <docs />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/navbar.vue";
import Introduction from "./components/introduction.vue";
import Features from "./components/features.vue";
import GetWriterey from "./components/getWriterey.vue";
import Docs from "./components/docs.vue";
import BetaHint from "./components/betaHint.vue";

@Component({
  components: {
    Navbar,
    Introduction,
    Features,
    GetWriterey,
    Docs,
    BetaHint,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f9f8fc;
  height: 100%;

  .content {
    padding: 1em;
  }

  .pure-button {
    font-family: "Playfair Display", Georgia, "Times New Roman", Times, serif;
    background: #88abde;
    color: white;
  }
}
</style>
