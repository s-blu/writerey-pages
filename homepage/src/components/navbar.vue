<template>
  <div class="header">
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
      <a class="pure-menu-heading" href="">
        {{ $t("title") }}
      </a>

      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link class="pure-menu-link" to="/download">{{ $t("navbar.download") }}</router-link>
        </li>
        <li class="pure-menu-item">
          <a :href="docLink" target="_blank" class="pure-menu-link">{{ $t("navbar.documentation") }}</a>
        </li>
        <li class="pure-menu-item">
          <a :href="repoLink" target="_blank" class="pure-menu-link">
            <font-awesome-icon class="github-icon" :icon="['fab', 'github']" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Navbar extends Vue {
  docLink = this.$i18n.t("links.documentation");
  repoLink = "https://github.com/s-blu/writerey";
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.github-icon {
  font-size: 24px;
}

.pure-menu-heading {
  font-family: $font_serif;
  text-transform: none;
  color: white;
}

.header {
  margin-bottom: 60px;
}

.pure-menu-list .pure-menu-link {
  color: white;
  text-decoration: none;
  &:hover,
  &:focus {
    text-decoration: underline;
    background-color: unset;

    .github-icon {
      color: $c_primary;
    }
  }
}

.pure-menu-list:last-of-type {
  margin-right: 1em;
}

.home-menu {
  height: 60px;
  background-color: $c_primary_dark;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
