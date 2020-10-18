<template>
  <div>
    <h2>{{ $t("docs.title") }}</h2>
    <p>{{ $t("docs.text") }}</p>
    <a class="pure-button">{{ $t("docs.link") }}</a>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Docs extends Vue {}
</script>

<style scoped lang="scss"></style>
