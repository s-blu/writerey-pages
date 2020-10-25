<template>
  <div>
    <h2>{{ $t("beta.title") }}</h2>
    <p>{{ $t("beta.intro") }}</p>
    <ul>
      <li v-for="point in betaPoints" :key="point">{{ point }}</li>
    </ul>
    <p>{{ $t("beta.v1hint") }}</p>
    <h3>{{ $t("beta.roadmap.title") }}</h3>
    <i18n path="beta.roadmap.text" tag="p">
      <template v-slot:link>
        <a :href="$t('beta.roadmap.link')" target="_blank">{{ $t("beta.roadmap.link-label") }}</a>
      </template>
    </i18n>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class BetaHint extends Vue {
  betaPoints = this.$i18n.t("beta.points");
}
</script>

<style scoped lang="scss"></style>
