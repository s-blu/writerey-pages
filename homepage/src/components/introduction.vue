<template>
  <div>
    <h1>Welcome to Writerey!</h1>
    <img class="pure-img splashscreen" src="../assets/img/writerey-splashscreen.png" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Introduction extends Vue {}
</script>

<style scoped lang="scss">
  .splashscreen {
    width: 350px;
  }

</style>
