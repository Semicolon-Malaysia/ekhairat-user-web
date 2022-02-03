<template>
  <div class="pages__index"></div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
// import FooterLarge from "~/components/Pages/Index/FooterLarge.vue";
// import HeroBanner from "~/components/Pages/Index/HeroBanner.vue";
// import ListAnnouncements from "~/components/Pages/Index/ListAnnouncements.vue";
// import ListPros from "~/components/Pages/Index/ListPros.vue";

@Component({
  auth: "guest"
  // layout: "unauthenticated",
  // components: {
  //   HeroBanner,
  //   ListPros,
  //   ListAnnouncements,
  //   FooterLarge
  // }
})
export default class PageIndex extends Vue {
  get isUser() {
    return this.$auth.loggedIn;
  }

  mounted() {
    if (!this.isUser) {
      this.$router.push(this.localePath({ name: "landing" }));
    } else {
      this.$router.push(this.localePath({ name: "home" }));
    }
    // this.$nuxt.$gtag.pageview({
    //   page_path: this.$route.fullPath,
    //   page_title: this.$route.path
    // });
  }
}
</script>

<style lang="scss" scoped></style>
