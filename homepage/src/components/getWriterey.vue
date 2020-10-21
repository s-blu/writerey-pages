<template>
  <div>
    <h2>{{ $t("get.title") }}</h2>
    <p>{{ $t("get.opensource") }}</p>
    <div class="button-wrap">
      <button class="pure-button ">{{ $t("get.download-button") }}</button>
    </div>
    <i18n path="get.contribute" tag="p">
      <template v-slot:repo>
        <a :href="repoLink" target="_blank">{{ $t("get.repo-link") }}</a>
      </template>
    </i18n>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class GetWriterey extends Vue {
  repoLink = "https://github.com/s-blu/writerey";
}
</script>

<style scoped lang="scss">
.button-wrap {
  display: flex;
  justify-content: center;
}
</style>
