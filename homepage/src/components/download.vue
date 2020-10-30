<template>
  <div>
    <h1>{{ $t("get-writerey.title") }}</h1>
    <p>{{ $t("get-writerey.requirements") }}</p>
    <div class="button-wrap">
      <a :href="$t('get-writerey.doc.link')" class="pure-button" target="_blank">{{ $t("get-writerey.doc.label") }}</a>
    </div>
    <p>{{ $t("get-writerey.download.text") }}</p>
    <div class="button-wrap">
      <a :href="downloadUrl" class="pure-button" target="_blank">{{ $t("get-writerey.download.label") }}</a>
    </div>
    <p>{{ $t("get-writerey.welcome") }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import axios from "axios";

@Component
export default class Download extends Vue {
  downloadUrl = "https://github.com/s-blu/writerey/releases/latest";

  mounted() {
    axios.get("https://api.github.com/repos/s-blu/writerey/releases/latest").then(res => {
      const asset: any = res.data?.assets.find((asset: any) => asset.name.match("writerey-(.+?)-win32-x64.zip")); //browser_download_url
      if (asset) this.downloadUrl = asset.browser_download_url;
    });
  }
}
</script>

<style scoped lang="scss">
.button-wrap {
  display: flex;
  justify-content: center;
}
</style>
