<template>
  <v-app>
    <desktop-nav-drawer />
    <app-bar />
    <v-main>
      <Nuxt />
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
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
