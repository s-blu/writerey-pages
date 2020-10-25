<template>
  <div>
    <component :is="componentName"></component>
    <!-- <imprintDe></imprintDe> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ImprintDe from "./imprint/imprintDe.vue";
import ImprintEn from "./imprint/imprintEn.vue";

@Component({
  components: {
    ImprintDe,
    ImprintEn,
  },
})
export default class Docs extends Vue {
  locale = this.$i18n.locale;

  componentName = `Imprint${this.capitalize(this.locale)}`;

  capitalize(string: string) {
    if (!string) return "";
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
</script>

<style scoped lang="scss"></style>
