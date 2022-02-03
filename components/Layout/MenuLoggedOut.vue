<template>
  <div class="components__menuLoggedOut center-all">
    <template v-for="(item, index) in navMenu">
      <v-btn
        small
        active-class="primary--text"
        class="mr-1"
        v-if="!item.hasChild"
        v-text="item.title"
        text
        :key="index"
        :to="item.link"
      />

      <v-menu close-on-content-click nudge-bottom="35" v-else :key="index">
        <template v-slot:activator="{ on }">
          <v-btn
            small
            active-class="white--text"
            color="transparent"
            class="elevation-0"
            v-on="on"
            link
          >
            {{ item.title }}
            <v-icon small>mdi-chevron-down</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-list nav dense>
            <v-list-item
              active-class="primary--text"
              v-for="(child, index) in item.childMenu"
              :key="index"
              :to="child.link"
            >
              <v-list-item-title>
                {{ child.title }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <!-- <v-list class="d-inline-flex" flat color="transparent">
        <v-list-item :key="index" :to="item.link" active-class="white--text">
          <v-list-item-title> {{ item.title }}</v-list-item-title>
        </v-list-item>
    </v-list> -->
    </template>

    <!-- <button-login-menu /> -->
    <v-btn
      depressed
      small
      rounded
      color="#eeeeee"
      :to="localePath({ name: 'login' })"
      width="130"
    >
      {{ $t("label.login") }}
    </v-btn>

    <language-switcher>
      <template v-slot:activator="{ on }">
        <v-btn icon color="primary" v-on="on">
          <v-icon>mdi-translate</v-icon>
        </v-btn>
      </template>
    </language-switcher>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ButtonLoginMenu from "../Widgets/ButtonLoginMenu.vue";
import { Locale } from "@nuxtjs/i18n";
import LanguageSwitcher from "../Widgets/LanguangeSwitcher.vue";

@Component({
  components: {
    ButtonLoginMenu,
    LanguageSwitcher
  }
})
export default class MenuLoggedOut extends Vue {
  get navMenu() {
    return [
      {
        title: this.$t("label.home"),
        hasChild: false,
        link: this.localePath({ name: "landing" }),
        slug: "home"
      },
      {
        title: this.$t("label.services"),
        hasChild: true,
        childMenu: [
          {
            title: this.$t("label.eforms"),
            link: this.localePath({ name: "claims" }),
            slug: "reports"
          },
          {
            title: this.$t("label.claims"),
            link: this.localePath({ name: "claims" }),
            slug: "reports"
          },
          {
            title: this.$t("label.statistics"),
            link: this.localePath({ name: "reports" }),
            slug: "reports"
          }
        ],
        slug: "services"
      },
      {
        title: this.$t("label.contactUs"),
        hasChild: false,
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
