<template>
  <div class="components__heroBanner">
    <div class="inner-section full-width">
      <v-row>
        <v-col>
          <div class="full-size d-flex justify-center flex-column">
            <h1>Quis nostrud exercitation <br />ullamco laboris nisi!</h1>
            <h5 class="primary--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h5>

            <div class="d-flex my-10 flex-column">
              <p class="text-h2 ">2,457</p>
              <p>{{ $t("label.totalActiveMembers") }}</p>
            </div>

            <v-btn
              rounded
              color="primary"
              width="170"
              :to="localePath({ name: 'register' })"
            >
              {{ $t("label.registerNow") }}
            </v-btn>
          </div>
        </v-col>

        <v-col>
          <v-img
            src="/vector-images/fill_up_form.svg"
            max-width="500"
            height="auto"
            contain
          />
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class HeroBanner extends Vue {}
</script>

<style lang="scss" scoped>
.components__heroBanner {
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 100px 0;

  //   background: rgb(0, 145, 110);
  //   background: linear-gradient(
  //     90deg,
  //     rgba(0, 145, 110, 1) 0%,
  //     rgba(26, 203, 160, 1) 30%,
  //     rgba(26, 203, 160, 1) 70%,
  //     rgba(0, 145, 110, 1) 100%
  //   );
}
</style>
