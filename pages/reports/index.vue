<template>
  <div class="pages__reports">
    Reports Page
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  auth: "guest",
  layout: "unauthenticated"
})
export default class PageReports extends Vue {}
</script>

<style lang="scss" scoped></style>
