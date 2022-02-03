<template>
  <div class="components__dashboardContainer inner-section">
    <v-row>
      <v-col cols="12" md="4">
        <digital-cert />
      </v-col>

      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <quick-access />
          </v-col>

          <v-col cols="12">
            <panel-announcement />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import DigitalCert from "~/components/Widgets/DigitalCert.vue";
import PanelAnnouncement from "~/components/Widgets/PanelAnnouncement.vue";
import QuickAccess from "~/components/Widgets/QuickAccess.vue";

@Component({
  components: {
    DigitalCert,
    QuickAccess,
    PanelAnnouncement
  }
})
export default class DashboardContainer extends Vue {}
</script>
