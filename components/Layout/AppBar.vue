<template>
  <v-app-bar
    class="components__appBar"
    color="white"
    :height="$vuetify.breakpoint.mdAndUp ? '100' : '70'"
    flat
    app
  >
    <div class="inner-section appbar-content">
      <v-img
        src="/logo.svg"
        width="auto"
        :height="$vuetify.breakpoint.mdAndUp ? '70' : '50'"
        contain
        class="ma-0"
        position="start"
        alt="Easy Khairat"
      />
      <v-spacer></v-spacer>
      <menu-logged-out v-if="$vuetify.breakpoint.mdAndUp" />
      <menu-mobile v-else />
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import MenuLoggedOut from "./MenuLoggedOut.vue";
import MenuMobile from "./MenuMobile.vue";

@Component({
  components: {
    MenuLoggedOut,
    MenuMobile
  }
})
export default class AppBar extends Vue {
  get masjidName() {
    return process.env.MASJID_NAME;
  }
}
</script>

<style lang="scss" scoped>
.components__appBar {
  .appbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
}
</style>
