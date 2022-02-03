<template>
  <v-expansion-panel class="transparent" active-class="primary--text">
    <v-expansion-panel-header>
      {{ data.date }} - {{ data.title }}
    </v-expansion-panel-header>

    <v-expansion-panel-content>
      {{ data.content }}
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class ItemAnnouncement extends Vue {
  @Prop({ type: Object, required: true }) data!: Object;
}
</script>

<style lang="scss" scoped></style>
