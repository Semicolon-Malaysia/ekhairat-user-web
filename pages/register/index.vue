<template>
  <div class="pages__register inner-section center-all full-size">
    <v-card color="#eeeeee" width="100%" class="pa-8">
      <form-register />
    </v-card>

    <!-- <redirect-login /> -->
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import FormRegister from "~/components/Pages/Register/FormRegister.vue";
import RedirectLogin from "~/components/Pages/Register/RedirectLogin.vue";

@Component({
  layout: "unauthenticated",
  components: {
    RedirectLogin,
    FormRegister
  }
})
export default class PageRegister extends Vue {}
</script>
