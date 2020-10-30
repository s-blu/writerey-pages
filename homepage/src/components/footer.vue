<template>
  <div class="footer">
    <div class="contact">
      <a class="email-link" :href="'mailto:' + email">{{ email }}</a>
      <router-link to="/imprint">{{ $t("footer.imprint") }}</router-link>
    </div>

    <a :href="repoLink" target="_blank" :aria-label="$t('footer.github')">
      <font-awesome-icon class="github-icon" :icon="['fab', 'github']" />
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HomepageFooter extends Vue {
  public email = this.$i18n.t("footer.email");
  repoLink = "https://github.com/s-blu/writerey";
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.footer {
  height: 80px;
  background-color: $c_dark_grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;

  & * {
    font-size: 14px;
    font-family: $font_sans_serif;
    color: white;
  }
}

.github-icon {
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: $c_primary;
  }
}
.contact {
  padding: 2em;
}
.email-link {
  display: block;
  margin-bottom: 1em;
}
</style>
