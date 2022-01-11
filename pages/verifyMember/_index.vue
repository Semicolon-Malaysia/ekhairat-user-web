<template>
  <div class="pages__verifyMember">
    {{ userId }}
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class PageVerifyMember extends Vue {
  get userId() {
    return this.$route.params.index;
  }
}
</script>

<style lang="scss" scoped></style>
