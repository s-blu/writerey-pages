<template>
  <div class="footer">
    <div class="contact">
      <router-link to="/imprint">{{ $t("footer.imprint") }}</router-link>
      <a class="email-link" :href="'mailto:' + email">{{ email }}</a>
    </div>

    <a :href="repoLink" target="_blank">
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
  background-color: #393939;
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
  margin-top: 1em;
}
</style>
