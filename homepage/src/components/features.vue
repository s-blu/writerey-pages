<template>
  <div>
    <h2>{{ $t("features.title") }}</h2>
    <h3>{{ $t("features.autosave.title") }}</h3>
    <p>{{ $t("features.autosave.text") }}</p>
    <h3>{{ $t("features.projects.title") }}</h3>
    <p>{{ $t("features.projects.text") }}</p>
    <h3>{{ $t("features.distractionfree.title") }}</h3>
    <p>{{ $t("features.distractionfree.text") }}</p>
    <h3>{{ $t("features.review.title") }}</h3>
    <p>{{ $t("features.review.text") }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Features extends Vue {}
</script>

<style scoped lang="scss"></style>
