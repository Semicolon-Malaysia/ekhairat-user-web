<template>
  <v-row class="components__heroBanner" justify="center">
    <v-col cols="12" md="6">
      <div class="full-size d-flex justify-center flex-column">
        <h1 class="banner-title text-h4 font-weight-black text-uppercase">
          {{ bannerTitle }}
        </h1>

        <h5 class="banner-title primary--text text-h6">
          {{ bannerSubtitle }}
        </h5>

        <div class="d-flex my-10 flex-column">
          <p class="text-h2 ">2,457</p>
          <p>{{ $t("label.totalActiveMembers") }}</p>
        </div>

        <v-btn
          rounded
          color="primary"
          width="200"
          :to="localePath({ name: 'register' })"
        >
          {{ $t("label.registerNow") }}
        </v-btn>
      </div>
    </v-col>

    <v-col cols="12" md="6" class="center-all">
      <v-img
        src="/vector-images/fill_up_form.svg"
        max-width="500"
        height="auto"
        position="center"
        contain
      />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class HeroBanner extends Vue {
  get bannerTitle() {
    return this.$t("message.bannerTitle");
  }

  get bannerSubtitle() {
    return this.$t("message.bannerSubtitle");
  }
}
</script>

<style lang="scss" scoped>
.components__heroBanner {
  margin-bottom: 60px;

  .banner-title {
    max-width: 400px;
    word-wrap: break-word;
  }
}
</style>
