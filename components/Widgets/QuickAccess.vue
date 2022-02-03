<template>
  <div class="components__quickAccess">
    <v-card flat color="#eeeeee" class="px-6 pb-6" rounded="xl">
      <v-card-title class="px-0">{{ $t("label.quickAccess") }}</v-card-title>

      <!-- <div class="d-inline-flex justify-space-between full-width"> -->
      <v-row justify="start">
        <v-col
          cols="6"
          md="3"
          v-for="(item, index) in quickAccess"
          :key="index"
        >
          <v-card
            rounded="lg"
            class="cursor-pointer"
            width="180"
            height="100"
            color="white"
            flat
          >
            <v-card-actions class="center-all flex-column">
              <v-icon size="xl" class="d-flex mx-auto">{{ item.icon }}</v-icon>
              <v-card-subtitle class="text-center text-subtitle-2">
                {{ item.title }}
              </v-card-subtitle>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <!-- </div> -->
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class QuickAccess extends Vue {
  quickAccess: Array<Object> = [
    {
      title: this.$t("label.updateInformation"),
      slug: "update-information",
      icon: "mdi-card-account-details",
      link: ""
    },
    {
      title: this.$t("label.submitClaim"),
      slug: "submit-claim",
      icon: "mdi-file-document-edit",
      link: ""
    },
    {
      title: this.$t("label.notifyDeath"),
      slug: "notify-death",
      icon: "mdi-bell-ring",
      link: ""
    },
    {
      title: this.$t("label.makePayments"),
      slug: "make-payments",
      icon: "mdi-credit-card-marker",
      link: ""
    },
    {
      title: this.$t("label.requestMembershipCard"),
      slug: "make-payments",
      icon: "mdi-credit-card-marker",
      link: ""
    }
  ];
}
</script>

<style lang="scss" scoped></style>
