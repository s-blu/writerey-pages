<template>
  <div>
    <h2>{{ $t("get.title") }}</h2>
    <p>{{ $t("get.opensource") }}</p>
    <div class="button-wrap">
      <button class="pure-button ">{{ $t("get.download-button") }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class GetWriterey extends Vue {}
</script>

<style scoped lang="scss">
.button-wrap {
  display: flex;
  justify-content: center;
}
</style>
