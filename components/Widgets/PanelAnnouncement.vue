<template>
  <div class="components__panelAnnouncements">
    <v-card color="#eeeeee" flat rounded="xl">
      <v-card-title>
        {{ $t("label.announcements") }}
        <v-spacer></v-spacer>
        <v-btn text small color="primary">
          {{ $t("label.viewAll") }}
        </v-btn>
      </v-card-title>

      <v-expansion-panels accordion flat hover class="transparent">
        <item-announcement
          v-for="(item, index) in items"
          :key="index"
          :data="item"
        />
      </v-expansion-panels>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import ItemAnnouncement from "./ItemAnnouncement.vue";

@Component({
  components: {
    ItemAnnouncement
  }
})
export default class PanelAnnouncement extends Vue {
  get items() {
    return [
      {
        date: "23/01/2022",
        title: "Consectetur adipiscing elit",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        date: "23/01/2022",
        title: "Tempor incididunt ut labore",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        date: "23/01/2022",
        title: "Tempor incididunt ut labore",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ];
  }
}
</script>

<style lang="scss" scoped></style>
