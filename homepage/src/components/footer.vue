<template>
  <div class="footer"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
.button-wrap {
  display: flex;
  justify-content: center;
}
.footer {
  height: 60px;
  background-color: #3963a1;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
