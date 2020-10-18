<template>
  <div class="header">
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
      <a class="pure-menu-heading" href="">{{ $t("title") }}</a>

      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <a :href="downloadLink" class="pure-menu-link">{{ $t("navbar.download") }}</a>
        </li>
        <li class="pure-menu-item">
          <a :href="docLink" class="pure-menu-link">{{ $t("navbar.documentation") }}</a>
        </li>
        <li class="pure-menu-item">
          <a href="#" class="pure-menu-link">{{ $t("navbar.imprint") }}</a>
          <!-- fixme -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  downloadLink = this.$i18n.t("links.download");
  docLink = this.$i18n.t("links.documentation");
}
</script>

<style scoped lang="scss">
.pure-menu-heading {
  font-family: "Playfair Display", sans-serif;
  text-transform: none;
}

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
  justify-content: space-between;
}
</style>
