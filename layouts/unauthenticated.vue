<template>
  <v-app class="layout__unauthenticated">
    <app-bar />

    <v-main>
      <nuxt keep-alive />
    </v-main>

    <v-footer
      app
      absolute
      v-if="$vuetify.breakpoint.mdAndUp"
      :color="isLandingPage ? 'primary' : 'white'"
    >
      <span class="center-all full-width">
        &copy; {{ new Date().getFullYear() }} - Easy Khairat {{ masjidName }}
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import AppBar from "~/components/Layout/AppBar.vue";
import NavBarMobile from "~/components/Layout/NavBarMobile.vue";

@Component({
  components: {
    AppBar,
    NavBarMobile
  }
})
export default class LayoutUnauthenticated extends Vue {
  get appbar() {
    return this.$vuetify.breakpoint.xsOnly ? "nav-bar-mobile" : "app-bar";
  }

  get isLandingPage() {
    return this.$route.name?.includes("landing");
  }

  get masjidName() {
    return process.env.MASJID_NAME;
  }
}
</script>
