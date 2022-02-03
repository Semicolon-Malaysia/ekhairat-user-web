<template>
  <v-navigation-drawer permanent app color="primary" class="white--text">
    <div class="center-all-inline pt-5 px-4">
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
      <template v-for="(item, index) in navMenu">
        <v-list-item
          :key="index"
          link
          v-if="item.isLink"
          :to="item.link"
          exact-path
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>{{ item.title }} </v-list-item-title>
        </v-list-item>

        <dialog-logout v-else :key="index">
          <template v-slot:activator="{ on }">
            <v-list-item link v-on="on">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{ item.title }} </v-list-item-title>
            </v-list-item>
          </template>
        </dialog-logout>
      </template>
    </v-list>
    <!-- </dialog-logout> -->

    <dialog-logout />
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import DialogLogout from "../Widgets/DialogLogout.vue";

@Component({
  components: {
    DialogLogout
  }
})
export default class DesktopNavDrawer extends Vue {
  get navMenu() {
    return [
      {
        title: this.$t("label.dashboard"),
        slug: "dashboard",
        isLink: true,
        link: this.localePath({ name: "home" }),
        icon: "mdi-view-dashboard"
      },
      {
        title: this.$t("label.membership"),
        slug: "membership",
        isLink: true,
        link: this.localePath({ name: "membership" }),
        icon: "mdi-account-group"
      },
      {
        title: this.$t("label.finance"),
        slug: "finance",
        isLink: true,
        link: "",
        icon: "mdi-cash-multiple"
      },
      {
        title: this.$t("label.claims"),
        slug: "claims",
        isLink: true,
        link: "",
        icon: "mdi-file-document"
      },
      {
        title: this.$t("label.reports"),
        slug: "reports",
        isLink: true,
        link: "",
        icon: "mdi-poll"
      },
      {
        title: this.$t("label.accountSetting"),
        slug: "account",
        isLink: true,
        link: "",
        icon: "mdi-account-cog"
      },
      {
        title: this.$t("label.helpCenter"),
        slug: "help-center",
        isLink: true,
        link: "",
        icon: "mdi-help-circle"
      },
      {
        title: this.$t("label.logout"),
        slug: "logout",
        isLink: false,
        icon: "mdi-logout"
      }
    ];

    // onLogout(){

    // }
  }
}
</script>
