<template>
  <div class="pages__index">
    <list-announcements />
    <hero-banner />
    <list-pros />
    <footer-large />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import FooterLarge from "~/components/Pages/Index/FooterLarge.vue";
import HeroBanner from "~/components/Pages/Index/HeroBanner.vue";
import ListAnnouncements from "~/components/Pages/Index/ListAnnouncements.vue";
import ListPros from "~/components/Pages/Index/ListPros.vue";

@Component({
  layout: "unauthenticated",
  components: {
    HeroBanner,
    ListPros,
    ListAnnouncements,
    FooterLarge
  }
})
export default class PageIndex extends Vue {}
</script>

<style lang="scss" scoped></style>
