<template>
  <div class="intro">
    <img class="pure-img splashscreen" src="../assets/img/writerey-splashscreen.png" />
    <h1>{{ $t("introduction.title") }}</h1>
    <p>{{ $t("introduction.text") }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Introduction extends Vue {}
</script>

<style scoped lang="scss">
h1 {
  font-size: 24pt;
}

.intro {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.splashscreen {
  width: 350px;
  margin-bottom: 1em;
}
</style>
