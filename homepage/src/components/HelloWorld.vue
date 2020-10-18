<template>
  <div class="header">
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
      <a class="pure-menu-heading" href="">Your Site</a>

      <ul class="pure-menu-list">
        <li class="pure-menu-item pure-menu-selected">
          <a href="#" class="pure-menu-link">Home</a>
        </li>
        <li class="pure-menu-item">
          <a href="#" class="pure-menu-link">Tour</a>
        </li>
        <li class="pure-menu-item">
          <a href="#" class="pure-menu-link">Sign Up</a>
        </li>
      </ul>
    </div>

    <div>translated: {{ $t("message") }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
