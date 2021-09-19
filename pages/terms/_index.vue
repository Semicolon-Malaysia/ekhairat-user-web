<template>
  <div class="pages__terms inner-section">
    <v-container>
      <p class="black--text text-capitalize font-weight-bold">
        {{ routeParams }}
      </p>
      <p class="black--text">Terms and Conditions here...</p>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({
  layout: "unauthenticated"
})
export default class PageTerms extends Vue {
  get routeParams() {
    return this.$route.params.index;
  }
}
</script>
