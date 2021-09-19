<template>
  <v-row class="components__formLogin center-all">
    <v-col>
      <v-img
        src="/vector-images/sign-in.svg"
        :width="$vuetify.breakpoint.xs ? '150' : '100%'"
        height="auto"
        contain
        class="mx-auto"
      />
    </v-col>

    <v-col>
      <h1 class="text-h4 mb-5">{{ $t("label.login") }}</h1>
      <v-text-field
        v-model="formModel.ic_number"
        :label="$t('label.icNo')"
        filled
        dense
        :placeholder="$t('label.enterYourIcNo')"
      />

      <v-text-field
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        :type="showPassword ? 'text' : 'password'"
        @click:append="showPassword = !showPassword"
        :label="$t('label.password')"
        filled
        dense
      />

      <div class="center-all flex-column">
        <v-btn
          outlined
          rounded
          color="primary"
          width="200"
          class="mb-3"
          @click="onSubmit"
        >
          {{ $t("label.login") }}
        </v-btn>

        <a
          :href="localePath({ name: 'forgotPassword' })"
          class="grey--text text-decoration-none"
        >
          {{ $t("label.forgotPassword") }}
        </a>

        <a
          :href="localePath({ name: 'register' })"
          class="info--text text-caption text-decoration-none"
        >
          {{ $t("label.registerNow") }}
        </a>
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
interface LoginForm {
  ic_number: String;
  password: String;
}

@Component({})
export default class FormLogin extends Vue {
  showPassword: Boolean = false;
  formModel: LoginForm = {
    ic_number: "",
    password: ""
  };

  onSubmit() {
    this.$router.push(this.localePath({ name: "home" }));
  }
}
</script>
