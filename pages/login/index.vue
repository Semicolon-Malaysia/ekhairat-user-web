<template>
  <div class="pages__login inner-section center-all">
    <form-login />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import { PageView } from "vue-gtag";
import FormLogin from "~/components/Pages/Login/FormLogin.vue";

@Component({
  layout: "unauthenticated",
  components: {
    FormLogin
  }
})
export default class PageLogin extends Vue {
  mounted() {
    this.$nuxt.$gtag.pageview(this.$route as PageView);
  }
}
</script>
