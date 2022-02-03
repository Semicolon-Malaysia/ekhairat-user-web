<template>
  <div class="pages__landing">
    <div class="inner-section">
      <ads-leaderboard v-if="$vuetify.breakpoint.mdAndUp" />
      <hero-banner />
      <list-pros />
    </div>

    <footer-large />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { PageView } from "vue-gtag";
import AdsLeaderboard from "~/components/Advertisements/AdsLeaderboard.vue";
import FooterLarge from "~/components/Pages/Index/FooterLarge.vue";
import HeroBanner from "~/components/Pages/Index/HeroBanner.vue";
import ListAnnouncements from "~/components/Pages/Index/ListAnnouncements.vue";
import ListPros from "~/components/Pages/Index/ListPros.vue";

@Component({
  auth: "guest",
  layout: "unauthenticated",
  components: {
    HeroBanner,
    ListPros,
    ListAnnouncements,
    FooterLarge,
    AdsLeaderboard
  }
})
export default class PageLanding extends Vue {
  get isUser() {
    return this.$auth.loggedIn;
  }

  mounted() {
    this.$nuxt.$gtag.pageview(this.$route as PageView);
  }
}
</script>

<style lang="scss" scoped></style>
