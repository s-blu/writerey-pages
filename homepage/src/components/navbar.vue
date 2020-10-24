<template>
  <div class="header">
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed" ref="header">
      <a class="pure-menu-heading" href="">
        <router-link class="pure-menu-link header-title" to="/">{{ $t("title") }}</router-link>
      </a>

      <ul class="pure-menu-list">
        <li class="pure-menu-item">
          <router-link class="pure-menu-link" to="/">{{ $t("navbar.home") }}</router-link>
        </li>
        <li class="pure-menu-item">
          <router-link class="pure-menu-link" to="/download">{{ $t("navbar.download") }}</router-link>
        </li>
        <li class="pure-menu-item">
          <a :href="docLink" target="_blank" class="pure-menu-link">{{ $t("navbar.documentation") }}</a>
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

  mounted() {
    window.onscroll = this.scrollFunction;
  }

  scrollFunction() {
    const header: HTMLElement = this.$refs.header as HTMLElement;
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      header.classList.add("shadowed");
    } else {
      header.classList.remove("shadowed");
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.header,
.home-menu {
  height: 50px;
}

.header {
  .pure-menu-link {
    font-family: $font_sans_serif;
    color: white;
    text-decoration: none;
    &:hover,
    &:focus {
      text-decoration: underline;
      background-color: unset;
    }
  }

  .pure-menu-link.header-title {
    font-family: $font_serif;
    text-transform: none;
    color: white;
  }
}

.pure-menu-list:last-of-type {
  margin-right: 1em;
}

.home-menu {
  background-color: $c_primary_dark;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.home-menu {
  // avoids jitter
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0), 0 0.2rem 0.4rem rgba(0, 0, 0, 0);
  transition: box-shadow 250ms;

  &.shadowed {
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
  }
}
</style>
