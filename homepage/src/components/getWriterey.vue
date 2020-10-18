<template>
  <div>
    <h2>{{ $t("get.title") }}</h2>
    <p>{{ $t("get.opensource") }}</p>
    <button class="pure-button">{{ $t("get.download-button") }}</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class GetWriterey extends Vue {}
</script>

<style scoped lang="scss"></style>
