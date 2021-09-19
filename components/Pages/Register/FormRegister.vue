<template>
  <div class="components__formRegister">
    <h1 class="text-h4 text-center font-weight-bold mb-5">
      {{ formHeader }}
    </h1>
    <v-form v-if="!accountCreated">
      <v-row>
        <v-col>
          <v-text-field
            hide-details="auto"
            v-model="formModel.fullName"
            :placeholder="$t('label.enterYourFullName')"
            :label="$t('label.fullName')"
            dense
            filled
          />
        </v-col>
        <v-col>
          <v-text-field
            hide-details="auto"
            :placeholder="$t('label.enterYourUsername')"
            v-model="formModel.username"
            :label="$t('label.username')"
            dense
            filled
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            hide-details="auto"
            :placeholder="$t('label.enterYourIcNo')"
            v-model="formModel.icNo"
            :label="$t('label.icNo')"
            dense
            filled
          />
        </v-col>
        <v-col>
          <v-text-field
            hide-details="auto"
            v-model="formModel.dateOfBirth"
            readonly
            :label="$t('label.dateOfBirth')"
            dense
            filled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            hide-details="auto"
            :placeholder="$t('label.enterYourEmail')"
            v-model="formModel.email"
            :label="$t('label.email')"
            dense
            filled
          />
        </v-col>
        <v-col>
          <v-text-field
            hide-details="auto"
            :placeholder="$t('label.enterYourPhoneNo')"
            v-model="formModel.phoneNo"
            :label="$t('label.phoneNo')"
            dense
            filled
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-text-field
            hide-details="auto"
            v-model="formModel.password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            :label="$t('label.password')"
            dense
            filled
          />
        </v-col>
        <v-col>
          <v-text-field
            hide-details="auto"
            v-model="formModel.confirmPassword"
            :append-icon="showConfirmPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmPassword ? 'text' : 'password'"
            @click:append="showConfirmPassword = !showConfirmPassword"
            :label="$t('label.confirmPassword')"
            dense
            filled
          />
        </v-col>
      </v-row>

      <v-btn
        @click="onSubmit"
        rounded
        large
        width="200"
        color="primary"
        class="d-flex mx-auto mt-10 mb-3"
      >
        {{ $t("label.register") }}
      </v-btn>

      <p class="text-caption text-center">
        {{ $t("message.signUpAgreeTerms") }}
        <a
          :href="
            localePath({ name: 'terms', params: { index: 'registration' } })
          "
          target="_blank"
        >
          {{ $t("label.termsAndCondition") }}
        </a>
      </p>
    </v-form>

    <v-container v-else class="center-all flex-column">
      <p class="text-center text-subtitle-2 mb-10" style="width: 60%">
        {{ $t("message.plsVerifyEmail") }}
      </p>

      <v-btn text :to="localePath('/')" color="primary" rounded>{{
        $t("label.backToHome")
      }}</v-btn>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

interface RegisterForm {
  fullName: String;
  username: String;
  icNo: String;
  dateOfBirth: String;
  phoneNo: String;
  email: String;
  password: String;
  confirmPassword: String;
}

@Component({})
export default class FormRegister extends Vue {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  accountCreated: boolean = false;

  formModel: RegisterForm = {
    fullName: "",
    username: "",
    icNo: "",
    dateOfBirth: "",
    phoneNo: "",
    email: "",
    password: "",
    confirmPassword: ""
  };

  get formHeader() {
    if (this.accountCreated) return this.$t("label.yourAccountHasBeenCreated");
    else return this.$t("label.createYourAccount");
  }
  onSubmit() {
    this.accountCreated = true;
    // alert("Form Submitted!");
  }
}
</script>

<style lang="scss" scoped></style>
