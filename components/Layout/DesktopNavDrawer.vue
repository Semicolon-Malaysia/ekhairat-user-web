<template>
  <v-navigation-drawer permanent app color="primary" class="white--text">
    <div class="center-all-inline pt-10 px-4">
      <v-img
        src="/header-logo.svg"
        width="100"
        height="auto"
        contain
        alt="easy-khairat-logo"
        class="mr-3"
      />
      <p class="text-subtitle-2 mb-0">Masjid Al-Azim<br />Pandan Indah</p>
    </div>
    <v-list class="white--text">
      <v-list-item
        v-for="(item, index) in navMenu"
        :key="index"
        link
        :to="item.link"
        exact-path
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>{{ item.title }} </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class DesktopNavDrawer extends Vue {
  get navMenu() {
    return [
      {
        title: this.$t("label.dashboard"),
        slug: "dashboard",
        link: this.localePath({ name: "home" }),
        icon: "mdi-view-dashboard"
      },
      {
        title: this.$t("label.membership"),
        slug: "membership",
        link: this.localePath({ name: "membership" }),
        icon: "mdi-account-group"
      },
      {
        title: this.$t("label.finance"),
        slug: "finance",
        link: "",
        icon: "mdi-cash-multiple"
      },
      {
        title: this.$t("label.claims"),
        slug: "claims",
        link: "",
        icon: "mdi-file-document"
      },
      {
        title: this.$t("label.reports"),
        slug: "reports",
        link: "",
        icon: "mdi-poll"
      },
      {
        title: this.$t("label.accountSetting"),
        slug: "account",
        link: "",
        icon: "mdi-account-cog"
      },
      {
        title: this.$t("label.helpCenter"),
        slug: "help-center",
        link: "",
        icon: "mdi-help-circle"
      }
    ];
  }
}
</script>
