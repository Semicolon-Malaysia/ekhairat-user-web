<template>
  <v-card
    class="components__digitalCert"
    flat
    rounded="xl"
    color="#eeeeee"
    height="400"
    max-width="400"
  >
    <v-card-title class="center-all">
      {{ $t("label.membershipCertificate") }}
    </v-card-title>
    <v-container class="center-all flex-column">
      <p>{{ userData.full_name }}</p>
      <p>{{ userData.ic_number }}</p>
      <p>{{ userData.phone_no }}</p>
      <v-chip small color="success" class="mb-3">
        {{ userData.membership_status && userData.membership_status.value }}
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

@Component({})
export default class DigitalCert extends Vue {
  get userData() {
    return this.$store.state.user;
  }

  get lastUpdatedAt() {
    return dayjs().format("DD-MM-YYYY hh:mm:ss A");
  }
}
</script>

<style lang="scss" scoped></style>
