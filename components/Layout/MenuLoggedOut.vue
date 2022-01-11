<template>
  <div class="components__menuLoggedOut center-all">
    <v-list class="d-flex pa-0" flat>
      <v-list-item
        v-for="(item, index) in navMenu"
        :key="index"
        :to="item.link"
        active-class="primary--text"
      >
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
import { Locale } from "@nuxtjs/i18n";

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
        link: this.localePath({ name: "index" }),
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

  onClick(link: Locale) {
    this.$router.push(link);
  }
}
</script>

<style lang="scss" scoped></style>
