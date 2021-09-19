<template>
  <div class="pages__login inner-section full-size center-all">
    <form-login />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import FormLogin from "~/components/Pages/Login/FormLogin.vue";

@Component({
  layout: "unauthenticated",
  components: {
    FormLogin
  }
})
export default class PageLogin extends Vue {}
</script>
