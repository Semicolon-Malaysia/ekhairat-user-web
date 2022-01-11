<template>
  <div class="pages__verifyEmail center-all full-size">
    <v-card tile class="pa-6" width="500">
      <v-card-title class="mb-4">{{ $t("message.verifyEmail") }}</v-card-title>
      <v-card-subtitle class="mb-12">{{
        $t("message.verifyEmailSubtitle")
      }}</v-card-subtitle>

      <v-btn
        :loading="loading"
        @click="verifyEmailDebounce"
        color="primary"
        tile
        block
        x-large
      >
        {{ $t("label.verifyAccount") }}
      </v-btn>
    </v-card>
  </div>
</template>

<script lang="ts">
import { debounce } from "lodash";
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  auth: "guest",
  layout: "unauthenticated"
})
export default class PageVerifyEmail extends Vue {
  loading: Boolean = false;

  verifyEmailDebounce = debounce(this.verifyEmail, 1000);

  get token() {
    return this.$route.query.token;
  }

  async verifyEmail() {
    try {
      this.loading = true;
      let res = await this.$api.easyKhairat.auth.verifyEmail({
        token: this.token
      });

      this.$helper.handleRequestSuccess(res);
      this.$router.push(this.localePath("login"));
    } catch (error) {
      this.$helper.handleRequestError(error);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped></style>
