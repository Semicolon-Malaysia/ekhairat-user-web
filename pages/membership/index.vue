<template>
  <div class="components__pagesMembership inner-section">
    <tab-member-info />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { PageView } from "vue-gtag";
import TabMemberInfo from "~/components/Pages/Membership/TabMemberInfo.vue";

@Component({
  components: {
    TabMemberInfo
  }
})
export default class PageMembership extends Vue {
  mounted() {
    this.$nuxt.$gtag.pageview(this.$route as PageView);
  }
}
</script>

<style lang="scss" scoped></style>
