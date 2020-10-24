<template>
  <div>
    <h1>{{ $t("get-writerey.title") }}</h1>
    <p>{{ $t("get-writerey.requirements") }}</p>
    <div class="button-wrap">
      <a :href="$t('get-writerey.doc.link')" class="pure-button" target="_blank">{{ $t("get-writerey.doc.label") }}</a>
    </div>
    <p>{{ $t("get-writerey.download.text") }}</p>
    <div class="button-wrap">
      <a :href="$t('get-writerey.download.link')" class="pure-button" target="_blank">{{
        $t("get-writerey.download.label")
      }}</a>
    </div>
    <p>{{ $t("get-writerey.welcome") }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Download extends Vue {}
</script>

<style scoped lang="scss">
.button-wrap {
  display: flex;
  justify-content: center;
}
</style>
