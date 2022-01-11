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

<script>
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
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
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
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
}
</script>
