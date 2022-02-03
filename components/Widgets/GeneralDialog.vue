<template>
  <div class="components__generalDialog">
    <slot name="activator" v-bind:on="on" />

    <v-dialog
      v-model="dialog"
      content-class="components__generalDialog"
      max-width="600"
      persistent
    >
      <v-card color="#def6fe" class="black--text">
        <v-btn
          class="top:.5 right:.5"
          color="secondary"
          absolute
          icon
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title class="text-h4 text-sm-h5 mb-2 justify-center">
          {{ title }}
        </v-card-title>
        <v-card-subtitle v-if="subtitle">
          {{ subtitle }}
        </v-card-subtitle>
        <v-card-text class="px-5 py-10 text-center">
          <slot />
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import DialogOn from "@/types/dialogOn";

@Component
export default class GeneralDialog extends Vue {
  @Prop({ type: String, required: true }) title!: string;
  @Prop({ type: String, required: false }) subtitle!: string;

  dialog: boolean = false;

  on: DialogOn = {
    click: this.toggleDialog
  };

  toggleDialog() {
    this.dialog = !this.dialog;
  }
}
</script>
