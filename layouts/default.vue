<template>
  <v-app>
    <desktop-nav-drawer />
    <!-- <app-bar  /> -->
    <v-main class="main-container">
      <v-container class="pa-md-10">
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app v-if="$vuetify.breakpoint.mdAndUp">
      <span class="center-all full-width text-caption">
        &copy; {{ new Date().getFullYear() }} - Easy Khairat Masjid Al-'Azim
        Pandan Indah
      </span>
    </v-footer>
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
  clipped: boolean = false;
  drawer: boolean = false;
  fixed: boolean = false;
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
  miniVariant: boolean = false;
  right: boolean = true;
  rightDrawer: boolean = false;

  fn() {}
}
</script>
