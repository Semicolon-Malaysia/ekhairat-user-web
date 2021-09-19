<template>
  <div class="components__listAnnouncements primary">
    <div class="inner-section">
      <v-expansion-panels class="rounded-0" flat>
        <v-expansion-panel class="inner-section transparent inner-section">
          <v-expansion-panel-header class="center-all">
            <h1 class="text-h6 white--text mr-3">
              {{ $t("label.announcements") }}
            </h1>
          </v-expansion-panel-header>

          <v-divider class="mb-2" />
          <v-expansion-panel-content>
            <template v-for="(item, index) in sampleAnnouncement">
              <card-announcement :item="item" :key="index" />
            </template>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import CardAnnouncement from "~/components/Widgets/CardAnnouncement.vue";

@Component({
  components: {
    CardAnnouncement
  }
})
export default class ListAnnouncements extends Vue {
  showAnnouncement: boolean = true;

  get showIcon() {
    if (this.showAnnouncement) return "mdi-chevron-up";
    else return "mdi-chevron-down";
  }

  get sampleAnnouncement() {
    return [
      {
        date: "2/9/2021",
        title: "Quidem rerum facilis est et expedita",
        text: `Nam libero tempore, cum soluta nobis est eligendi optio cumque
          nihil impedit quo minus id quod maxime placeat facere possimus,
          omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
          autem quibusdam et aut officiis debitis aut rerum necessitatibus
          saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. 
          Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
          voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.`
      }
    ];
  }
}
</script>

<style lang="scss" scoped></style>
