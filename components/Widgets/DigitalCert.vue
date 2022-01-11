<template>
  <v-card
    class="components__digitalCert pb-5"
    flat
    rounded="xl"
    color="#eeeeee"
    max-width="400"
  >
    <v-card-title class="center-all">
      {{ $t("label.membershipCertificate") }}
    </v-card-title>

    <qr-code />

    <v-container class="center-all flex-column">
      <p class="mb-0 text-body-1 font-weight-bold">{{ userData.full_name }}</p>
      <p class="mb-0 text-subtitle-2">{{ userData.email }}</p>
      <p>{{ userData.phone_no }}</p>
      <v-chip small color="success" class="mb-3">
        ACTIVE
      </v-chip>
      <v-spacer></v-spacer>
      <p class="text-center text-caption">
        {{ $t("label.lastUpdatedAt") }} <br />
        {{ lastUpdatedAt }}
      </p>
      <v-btn class="d-flex mb-0">{{ $t("label.membershipInfo") }}</v-btn>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import dayjs from "dayjs";
import QrCode from "./QrCode.vue";

@Component({
  components: {
    QrCode
  }
})
export default class DigitalCert extends Vue {
  get userData() {
    return this.$auth.user;
  }

  get lastUpdatedAt() {
    return dayjs().format("DD/MM/YYYY - hh:mm:ss A");
  }
}
</script>

<style lang="scss" scoped></style>
