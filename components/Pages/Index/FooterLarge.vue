<template>
  <div class="components__footerLarge primary">
    <v-row class="inner-section white--text ma-0 pa-0">
      <v-col cols="12" sm="4">
        <p class=" mb-0 text-h4">Easy</p>
        <p class="text-h4 font-weight-black">Khairat</p>

        <p>
          Developed and managed by<br />
          <a
            href="http://semicolon.com.my"
            target="_blank"
            class="text-decoration-none black--text"
          >
            Semicolon Malaysia
          </a>
        </p>
      </v-col>

      <v-col cols="12" sm="4">
        <p class="text-h6">{{ mosqueData.name }}</p>
        <p>
          {{ mosqueData.address && mosqueData.address.street1 }}, <br />
          {{ mosqueData.address && mosqueData.address.street2 }}, <br />
          {{ mosqueData.address && mosqueData.address.city }}, <br />
          {{ mosqueData.address && mosqueData.address.postcode }},
          {{ mosqueData.address && mosqueData.address.state }}.
        </p>
      </v-col>

      <v-col cols="12" sm="4">
        <h1 class="text-h5 font-weight-bold mb-2">
          {{ $t("label.contactUs") }}
        </h1>
        <v-list color="transparent">
          <v-list-item class="pa-0 white--text">
            <v-icon color="white" class="mr-2">mdi-phone-outline</v-icon>
            {{ mosqueData.phoneNo }}
          </v-list-item>
          <v-list-item class="pa-0 white--text">
            <v-icon color="white" class="mr-2">mdi-email-outline</v-icon>
            {{ mosqueData.email }}
          </v-list-item>
          <v-list-item class="pa-0 white--text">
            <v-icon color="white" class="mr-2">mdi-facebook</v-icon>
            <a
              :href="mosqueData.facebookUrl"
              class="white--text text-decoration-none"
              target="_blank"
            >
              @{{ mosqueData.facebookUsername }}
            </a>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class FooterLarge extends Vue {
  get mosqueData() {
    return {
      name: "Masjid Al-Azim, Pandan Indah",
      phoneNo: "03-43564325",
      email: "salam@masjidalazim.com",
      facebookUsername: "masjidalazimpandanindah",
      facebookUrl: "http://facebook.com/masjidalazimpandanindah",
      address: {
        street1: "Jalan Pandan Mewah",
        street2: "Pandan Indah",
        city: "Kuala Lumpur",
        postcode: "55100",
        state: "Kuala Lumpur"
      }
    };
  }
}
</script>

<style lang="scss" scoped>
.components__footerLarge {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 24px;
}
</style>
