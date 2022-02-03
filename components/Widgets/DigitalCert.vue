<template>
  <v-card
    class="components__digitalCert pb-5"
    flat
    rounded="xl"
    color="#eeeeee"
    max-width="400"
    min-height="530"
  >
    <v-card-title class="center-all">
      {{ $t("label.membershipCertificate") }}
    </v-card-title>

    <template v-if="loading || membershipData == null">
      <div class="fill-height center-all">
        <v-progress-circular indeterminate color="primary" />
      </div>
    </template>

    <template v-else>
      <qr-code />

      <v-container class="center-all flex-column">
        <p class="mb-0 text-body-1 font-weight-bold">
          {{ membershipUser && membershipUser.full_name }}
        </p>

        <p class="text-body-2">
          {{ membershipUser && membershipUser.ic_no }}
        </p>

        <v-chip
          :color="statusDesc && statusDesc.color"
          class="mb-3 text-uppercase"
        >
          {{ statusDesc && statusDesc.desc }}
        </v-chip>

        <p class="text-center text-subtitle-2 text--secondary">
          {{ $t("label.lastUpdatedAt") }} <br />
          {{ membershipData && membershipData.updated_at }}
        </p>

        <v-btn
          class="d-flex mb-0"
          rounded
          color="primary"
          v-if="hasApplication"
        >
          {{ $t("label.membershipInfo") }}
        </v-btn>

        <v-btn
          class="d-flex mb-0"
          rounded
          color="primary"
          v-else
          :to="localePath({ name: 'register' })"
        >
          {{ $t("label.applyMembership") }}
        </v-btn>
      </v-container>
    </template>
  </v-card>
</template>

<script lang="ts">
import { Component, mixins } from "nuxt-property-decorator";
import QrCode from "./QrCode.vue";
import User from "~/types/user";
import FormRequest from "~/mixins/FormRequest";
import MemberApplication from "~/types/memberApplication/memberApplication";
import { debounce } from "lodash";

@Component({
  components: {
    QrCode
  }
})
export default class DigitalCert extends mixins(FormRequest) {
  debounceCheckMembership = debounce(this.checkMembership, 500);

  membershipData: any = null;

  get membershipUser(): User {
    return this.membershipData?.user as User;
  }

  get hasApplication(): Boolean {
    return this.membershipData?.submitted_at != null;
  }

  get statusDesc(): any {
    let statusOptions: any = {
      desc: null,
      color: null,
      code: null
    };

    statusOptions.code = this.membershipData?.status;
    if (!this.membershipData?.submitted_at) {
      statusOptions.desc = this.$t("label.noApplication");
      statusOptions.color = "error";
    } else {
      if (this.membershipData?.status == 0) {
        statusOptions.desc = this.$t("label.pending");
        statusOptions.color = "warning";
      } else {
        statusOptions.desc = this.$t("label.active");
        statusOptions.color = "primary";
      }
    }
    return statusOptions;
  }

  mounted() {
    this.loading = true;
    this.debounceCheckMembership();
  }

  async checkMembership() {
    try {
      const {
        data
      } = await this.$api.easyKhairat.applicationApi.createOrGetApplication({
        user_id: this.$auth.user?.id
      });

      this.membershipData = data;
    } catch (error) {
      this.handleRequestError(error);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped></style>
