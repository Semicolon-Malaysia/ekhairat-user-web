<template>
  <div class="components__formPersonal">
    <v-form :disabled="disabled">
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
    </v-form>
  </div>
</template>

<script lang="ts">
import { Component, mixins, Prop, Watch } from "nuxt-property-decorator";
import FormRequest from "~/mixins/FormRequest";
import MemberApplication from "~/types/memberApplication/memberApplication";
import User from "~/types/user";

@Component({})
export default class FormPersonal extends mixins(FormRequest) {
  @Prop({ required: true, type: Object }) data!: MemberApplication;

  disabled: Boolean = false;
  formModel: any = {};

  get userData() {
    return this.data?.user as User;
  }

  @Watch("userData", { immediate: false })
  onUserDataChange() {
    this.formModel = this.userData;
  }
}
</script>

<style lang="scss" scoped></style>
