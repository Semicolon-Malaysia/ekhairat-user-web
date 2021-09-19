<template>
  <div class="components__dashboardContainer inner-section">
    <v-row>
      <v-col>
        <digital-cert />
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import DigitalCert from "~/components/Widgets/DigitalCert.vue";

@Component({
  components: {
    DigitalCert
  }
})
export default class DashboardContainer extends Vue {}
</script>
