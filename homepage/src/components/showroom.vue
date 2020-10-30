<template>
  <div>
    <h2>User Interface</h2>
    <div class="showroom">
      <img
        alt="Screenshot of the writerey app when editing a document"
        width="100%"
        class="pure-img"
        :src="getImgSource()"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Showroom extends Vue {
  locale = this.$i18n.locale;

  getImgSource() {
    return require(`../assets/img/document_view_${this.locale}.jpg`);
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";
.showroom img {
  border: 1px solid $c_primary_light;
}
</style>
