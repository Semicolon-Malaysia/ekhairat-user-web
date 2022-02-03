<template>
  <div class="components__dialogLogout">
    <slot name="activator" v-bind:on="on" />

    <v-dialog
      v-model="dialog"
      content-class="components__dialogLogout"
      max-width="600"
      persistent
    >
      <v-card color="#eeeeee" class="black--text">
        <v-btn
          class="top:.5 right:.5 left:auto"
          color="primary"
          absolute
          icon
          @click="dialog = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-card-title class="text-h4 text-sm-h5 mb-2 justify-center">
          {{ title }}
        </v-card-title>
        <v-card-text v-if="subtitle" class="text-body-1 text-center">
          {{ subtitle }}
        </v-card-text>
        <v-card-text class="px-5 py-10 text-center">
          <v-btn
            class="mr-1 white--text"
            width="130"
            rounded
            color="#000"
            @click="dialog = false"
          >
            {{ $t("label.no") }}
          </v-btn>
          <v-btn
            class="ml-1"
            width="130"
            rounded
            color="primary"
            :loading="loading"
            @click="onLogout"
          >
            {{ $t("label.yes") }}
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, mixins } from "nuxt-property-decorator";
import DialogOn from "@/types/dialogOn";
import FormRequest from "~/mixins/FormRequest";

@Component
export default class DialogLogout extends mixins(FormRequest) {
  dialog: boolean = false;

  get title() {
    return this.$t("label.logout");
  }

  get subtitle() {
    return this.$t("message.confirmLogout");
  }

  on: DialogOn = {
    click: this.toggleDialog
  };

  toggleDialog() {
    this.dialog = !this.dialog;
  }

  async onLogout() {
    try {
      this.clearPreviousErrors();
      this.loading = true;

      this.$auth.logout();
    } catch (error) {
      this.handleRequestError(error);
    } finally {
      this.loading = false;
    }
  }
}
</script>
