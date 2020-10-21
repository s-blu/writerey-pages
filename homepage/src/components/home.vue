<template>
  <div class="home">
    <introduction />
    <features />
    <betaHint />
    <getWriterey />
    <docs />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./HelloWorld.vue";
import Navbar from "./navbar.vue";
import Introduction from "./introduction.vue";
import Features from "./features.vue";
import GetWriterey from "./getWriterey.vue";
import Docs from "./docs.vue";
import BetaHint from "./betaHint.vue";
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

<style lang="scss"></style>
