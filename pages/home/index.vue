<template>
  <div class="pages__home">
    <!-- <message-bar message="Test Message" type="error" /> -->
    <dashboard-container />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import DashboardContainer from "~/components/Pages/Home/DashboardContainer.vue";
import MessageBar from "~/components/Widgets/MessageBar.vue";

@Component({
  components: {
    DashboardContainer,
    MessageBar
  }
})
export default class PageHome extends Vue {}
</script>
