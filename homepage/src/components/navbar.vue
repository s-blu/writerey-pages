<template>
  <div class="header">
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
      <a class="pure-menu-heading" href="">{{ $t("title") }}</a>

      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <a href="#" class="pure-menu-link">{{ $t("link.download") }}</a>
        </li>
        <li class="pure-menu-item pure-menu-selected">
          <a href="#" class="pure-menu-link">{{ $t("link.documentation") }}</a>
        </li>

        <li class="pure-menu-item">
          <a href="#" class="pure-menu-link">{{ $t("link.imprint") }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {}
</script>

<style scoped lang="scss">
.header {
  margin-bottom: 60px;
}

.home-menu {
  height: 60px;
  background-color: #3963a1;
  a {
    color: white;
  }

  display: flex;
  align-items: center;
}
</style>
