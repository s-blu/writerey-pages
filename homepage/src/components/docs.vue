<template>
  <div>
    <h2>{{ $t("docs.title") }}</h2>
    <p>{{ $t("docs.text") }}</p>
    <div class="button-wrap">
      <a :href="$t('links.documentation')" class="pure-button" target="_blank">{{ $t("docs.link") }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Docs extends Vue {
}
</script>

<style scoped lang="scss">
.button-wrap {
  display: flex;
  justify-content: center;
}
</style>
