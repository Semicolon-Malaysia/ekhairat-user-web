<template>
  <div class="components__pagesMembership inner-section">
    <tab-member-info />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import TabMemberInfo from "~/components/Pages/Membership/TabMemberInfo.vue";

@Component({
  components: {
    TabMemberInfo
  }
})
export default class PageMembership extends Vue {}
</script>

<style lang="scss" scoped></style>
