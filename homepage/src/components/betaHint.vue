<template>
  <div>
    <h2>{{ $t("beta.title") }}</h2>
    <p>{{ $t("beta.intro") }}</p>
    <ul>
      <li v-for="point in betaPoints" :key="point">{{ point }}</li>
    </ul>
    <p>{{ $t("beta.v1hint") }}</p>
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
