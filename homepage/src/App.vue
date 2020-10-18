<template>
  <div id="app">
    <div>
      <navbar />
    </div>
    <div class="content pure-g">
      <div class="pure-u-lg-1-5"></div>
      <div class="pure-u-1 pure-u-lg-3-5">
        <introduction />
      </div>
      <!-- <div class="pure-u-1-5"></div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Navbar from "./components/navbar.vue";
import Introduction from "./components/introduction.vue";

@Component({
  components: {
    Navbar,
    Introduction,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #f9f8fc;
  height: 100%;

  .content {
  }
}
</style>
