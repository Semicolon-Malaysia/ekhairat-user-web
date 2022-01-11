<template>
  <div class="components__formRegister">
    <div class="form-title center-all flex-column">
      <h1 class="text-h5 text-md-h4 text-center font-weight-bold mb-2">
        {{ formHeader }}
      </h1>
      <p class="primary--text text-center text-caption text-sm-body-1 mb-5">
        {{ formSubtitle }}
      </p>
    </div>
    <v-form v-if="!accountCreated">
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            hide-details="auto"
            v-model="formModel.full_name"
            :error-messages="formErrors.full_name"
            :placeholder="$t('label.fullNameAsPerIc')"
            :label="$t('label.fullNameAsPerIc')"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            hide-details="auto"
            :error-messages="formErrors.username"
            :placeholder="$t('label.enterYourUsername')"
            v-model="formModel.username"
            :label="$t('label.username')"
            dense
            filled
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            hide-details="auto"
            :error-messages="formErrors.ic_no"
            :placeholder="$t('label.enterYourIcNo')"
            v-model="formModel.ic_no"
            :label="$t('label.icNo')"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            hide-details="auto"
            :error-messages="formErrors.date_of_birth"
            v-model="formModel.date_of_birth"
            readonly
            :label="$t('label.dateOfBirth')"
            dense
            filled
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            hide-details="auto"
            :error-messages="formErrors.email"
            :placeholder="$t('label.enterYourEmail')"
            v-model="formModel.email"
            :label="$t('label.email')"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            hide-details="auto"
            :error-messages="formErrors.phone_no"
            :placeholder="$t('label.enterYourPhoneNo')"
            v-model="formModel.phone_no"
            :label="$t('label.phoneNo')"
            dense
            filled
          />
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="6">
          <v-text-field
            hide-details="auto"
            v-model="formModel.password"
            :error-messages="formErrors.password"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            :label="$t('label.password')"
            dense
            filled
          />
        </v-col>
        <v-col cols="12" md="6">
          <v-text-field
            hide-details="auto"
            v-model="formModel.password_confirmation"
            :error-messages="formErrors.password_confirmation"
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
        :loading="loading"
        large
        width="200"
        color="primary"
        class="d-flex mx-auto mt-10 mb-3"
      >
        {{ $t("label.register") }}
      </v-btn>

      <p class="text-caption text-center">
        {{ $t("message.signUpAgreeTerms") }} <br />
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

    <v-btn
      v-else
      :to="localePath('/')"
      color="primary"
      width="300"
      x-large
      class="mt-12 d-flex mx-auto"
    >
      {{ $t("label.home") }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Vue, Component, mixins } from "nuxt-property-decorator";
import FormRequest from "~/mixins/FormRequest";

interface RegisterForm {
  full_name: String;
  username: String;
  ic_no: String;
  date_of_birth: String;
  phone_no: String;
  email: String;
  password: String;
  password_confirmation: String;
}

@Component({})
export default class FormRegister extends mixins(FormRequest) {
  showPassword: boolean = false;
  showConfirmPassword: boolean = false;
  loading: boolean = false;
  accountCreated: boolean = false;

  formModel: RegisterForm = {
    full_name: "",
    username: "",
    ic_no: "",
    date_of_birth: "",
    phone_no: "",
    email: "",
    password: "",
    password_confirmation: ""
  };

  get formHeader() {
    if (this.accountCreated) return this.$t("label.yourAccountHasBeenCreated");
    else return this.$t("label.createYourAccount");
  }

  get formSubtitle() {
    if (this.accountCreated) return this.$t("message.verifyEmail");
    else return this.$t("message.youCanApplyMembership");
  }

  async onSubmit() {
    try {
      this.loading = true;
      this.clearPreviousErrors();

      let res = await this.$api.easyKhairat.auth.register(this.formModel);
      this.handleFormSubmitSuccess(res);
      this.accountCreated = true;
    } catch (error) {
      this.handleFormSubmitError(error);
    } finally {
      this.loading = false;
    }
  }
}
</script>

<style lang="scss" scoped>
.components__formRegister {
  .form-title {
    word-wrap: break-word;

    h1,
    p {
      max-width: 600px;
    }
  }
}
</style>
