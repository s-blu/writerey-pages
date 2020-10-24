<template>
  <div class="header">
    <div class="home-menu pure-menu pure-menu-horizontal pure-menu-fixed" ref="header">
      <span class="pure-menu-heading">
        <router-link class="pure-menu-link header-title" to="/">{{ $t("title") }}</router-link>
      </span>
      <a class="mobile-toggle" @click="toggleMobileNav()">
        <font-awesome-icon class="toggle-icon" :icon="['fas', 'bars']" />
      </a>
      <div class="nav-menu" ref="navMenu" @click="closeMobileNav()">
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

  closeMobileNav() {
    const menu = this.$refs.navMenu as HTMLElement;
    menu.classList.remove("show-menu");
  }

  toggleMobileNav() {
    const menu = this.$refs.navMenu as HTMLElement;

    if (menu?.classList.contains("show-menu")) {
      menu.classList.remove("show-menu");
    } else {
      menu?.classList.add("show-menu");
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";
$height_navbar: 50px;

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

// mobile/desktop nav switch
.mobile-toggle {
  display: none;
}

@media (min-width: 62em) {
  .header,
  .home-menu {
    height: $height_navbar;
  }

  .home-menu {
    align-items: center;
  }
}

@media (max-width: 62em) {
  .header {
    margin-bottom: $height_navbar;
  }
  
  .home-menu {
    transform: height 200ms;
    display: block;
  }

  .mobile-toggle {
    display: block;
    padding: 1em;
    margin-right: 1em;
    color: white;
    float: right;
    cursor: pointer;
  }

  .nav-menu {
    display: none;
    flex: none;
    &.show-menu {
      display: inline-block;
      display: flex;
      flex-direction: column;

      .pure-menu-item {
        display: block;
        text-align: right;
      }
    }
  }
}
</style>
