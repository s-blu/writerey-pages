<template>
  <div class="footer">
    FOOTERFOOTERFOOTERFOOTERFOOTERFOOTERFOOTERFOOTERFOOTERFOOTERFOOTERFOOTERFOOTERFOOTERFOOTER
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
@import "../assets/styles/variables";

.footer {
  height: 60px;
  background-color: $c_primary_dark;
}
</style>
