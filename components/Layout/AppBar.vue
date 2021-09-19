<template>
  <v-app-bar class="components__appBar" color="#fff" flat fixed app>
    <div class="inner-section appbar-content">
      <div class="d-flex align-end">
        <v-img
          src="/header-logo.svg"
          width="100"
          height="30"
          contain
          alt="Easy Khairat"
        />
        <h1 class="text-subtitle-2">Masjid Al-Azim, Pandan Indah</h1>
      </div>

      <v-spacer></v-spacer>
      <menu-logged-out v-if="$vuetify.breakpoint.smAndUp" />
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import MenuLoggedOut from "./MenuLoggedOut.vue";

@Component({
  components: {
    MenuLoggedOut
  }
})
export default class AppBar extends Vue {}
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
