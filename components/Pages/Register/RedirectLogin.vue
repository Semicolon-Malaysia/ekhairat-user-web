<template>
  <div class="components__redirectLogin">
    <h1 class="text-h6 font-weight-bold mb-5">
      {{ $t("label.alreadyHaveAnAccount") }}
    </h1>
    <p class="text-center mb-10">
      Molestias excepturi sint occaecati cupiditate non provident<br />
      similique sunt in culpa qui officia deserunt.
    </p>

    <v-btn color="white" rounded width="200">{{ $t("label.login") }}</v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class RedirectLogin extends Vue {}
</script>

<style lang="scss" scoped>
.components__redirectLogin {
  height: max-content;
  width: 40vw;
  background-color: #00916e;
  color: #fff;
  border-radius: 0 0 250px 0;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
