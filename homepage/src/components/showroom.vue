<template>
  <div>
    <h2>User Interface</h2>
    <div class="showroom">
      <img
        alt="Screenshot of the writerey app when editing a document"
        width="100%"
        class="pure-img"
        src="../assets/img/app-demo-with-explanation.png"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Showroom extends Vue {}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";
.showroom img {
  border: 1px solid $c_primary_light;
}
</style>
