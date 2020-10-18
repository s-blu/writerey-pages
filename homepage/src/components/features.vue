<template>
  <div>
    <h2>{{ $t("features.title") }}</h2>
    <ul>
      <li v-for="point in featureList" :key="point">{{ point }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Features extends Vue {
  featureList = this.$i18n.t("features.points");
}
</script>

<style scoped lang="scss"></style>
