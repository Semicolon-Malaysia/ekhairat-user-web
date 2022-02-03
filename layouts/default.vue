<template>
  <v-app>
    <desktop-nav-drawer />
    <!-- <app-bar  /> -->
    <v-main class="main-container">
      <v-container class="pa-md-10">
        <nuxt keep-alive />
      </v-container>
    </v-main>
    <!-- <v-footer
      color="transparent"
      absolute
      app
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <span class="center-all full-width">
        &copy; {{ new Date().getFullYear() }} - Easy Khairat Masjid Al-'Azim
        Pandan Indah
      </span>
    </v-footer> -->
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import AppBar from "~/components/Layout/AppBar.vue";
import DesktopNavDrawer from "~/components/Layout/DesktopNavDrawer.vue";

@Component({
  components: {
    AppBar,
    DesktopNavDrawer
  }
})
export default class LayoutDefault extends Vue {
  items: Array<Object> = [
    {
      icon: "mdi-apps",
      title: "Welcome",
      to: "/"
    },
    {
      icon: "mdi-chart-bubble",
      title: "Inspire",
      to: "/inspire"
    }
  ];
}
</script>
