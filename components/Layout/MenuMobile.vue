<template>
  <v-bottom-sheet class="components__menuMobile" v-model="sheet">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-on="on" v-bind="attrs">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </template>

    <v-sheet min-height="50vh" class="">
      <v-card color="primary" flat height="70" tile> </v-card>
      <v-list nav>
        <template v-for="(item, index) in navMenu">
          <v-list-item
            v-if="!item.hasChild"
            :key="index"
            active-class="primary--text"
            :to="item.link"
          >
            {{ item.title }}
          </v-list-item>

          <v-list-group v-else :key="index">
            <template v-slot:activator>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </template>

            <v-list-item
              class="ml-3"
              active-class="primary--text"
              v-for="(child, index) in item.childMenu"
              :key="index"
              :to="child.link"
            >
              {{ child.title }}
            </v-list-item>
          </v-list-group>
        </template>
      </v-list>
    </v-sheet>
  </v-bottom-sheet>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "nuxt-property-decorator";

@Component({})
export default class MenuMobile extends Vue {
  sheet: Boolean = false;

  @Watch("routePath")
  onRouteChanged() {
    this.sheet = false;
  }

  get routePath() {
    return this.$route.fullPath;
  }

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
      },
      {
        title: this.$t("label.login"),
        hasChild: false,
        link: this.localePath({ name: "login" }),
        slug: "login"
      }
    ];
  }
}
</script>
