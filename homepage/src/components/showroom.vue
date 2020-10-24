<template>
  <div>
    <h2>User Interface</h2>
    <div class="pure-g showroom">
      <div class="pure-u-lg-1-2">
        <img
          alt="Screenshot of the writerey app when editing a document"
          width="100%"
          class="pure-img"
          src="../assets/img/writerey-demo-app.jpg"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Showroom extends Vue {}
</script>

<style scoped lang="scss"></style>
