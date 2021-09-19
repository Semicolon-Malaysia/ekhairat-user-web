<template>
  <v-menu
    offset-y
    nudge-bottom="10"
    v-model="menu"
    :close-on-content-click="false"
    class="components__buttonLoginMenu"
  >
    <template v-slot:activator="{ on }">
      <v-btn v-on="on" small rounded color="primary" width="100">
        {{ $t("label.login") }}
      </v-btn>
    </template>

    <v-card flat>
      <v-container class="pa-8">
        <v-text-field :label="$t('label.icNo')" filled dense />

        <v-text-field
          :label="$t('label.password')"
          type="password"
          filled
          dense
        />

        <v-btn
          small
          outlined
          rounded
          color="primary"
          width="100"
          class="d-flex mx-auto mb-2"
        >
          {{ $t("label.login") }}
        </v-btn>

        <p class="text-caption forgot-password">
          {{ $t("label.forgotPassword") }}
        </p>
      </v-container>
    </v-card>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class ButtonLoginMenu extends Vue {
  menu: boolean = false;
}
</script>

<style lang="scss" scoped>
.components__buttonLoginMenu {
  .forgot-password {
    text-align: center;
    cursor: pointer !important;
    &:hover {
      text-decoration: underline !important;
      font-weight: 300 !important;
    }
  }
}
</style>
