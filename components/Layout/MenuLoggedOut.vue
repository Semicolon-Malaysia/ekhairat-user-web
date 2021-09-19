<template>
  <div class="components__menuLoggedOut center-all">
    <v-list class="d-flex pa-0">
      <v-list-item v-for="(item, index) in navMenu" :key="index" link>
        <v-list-item-title> {{ item.title }}</v-list-item-title>
      </v-list-item>
    </v-list>

    <!-- <button-login-menu /> -->
    <v-btn
      small
      rounded
      color="primary"
      :to="localePath({ name: 'login' })"
      width="100"
    >
      {{ $t("label.login") }}
    </v-btn>
    <v-btn icon color="accent" class="mr-1">
      <v-icon>mdi-web</v-icon>
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ButtonLoginMenu from "../Widgets/ButtonLoginMenu.vue";

@Component({
  components: {
    ButtonLoginMenu
  }
})
export default class MenuLoggedOut extends Vue {
  get navMenu() {
    return [
      {
        title: this.$t("label.home"),
        link: "",
        slug: "home"
      },
      {
        title: this.$t("label.reports"),
        link: "",
        slug: "reports"
      },
      {
        title: this.$t("label.contactUs"),
        link: "",
        slug: "contact-us"
      }
    ];
  }
}
</script>

<style lang="scss" scoped></style>
