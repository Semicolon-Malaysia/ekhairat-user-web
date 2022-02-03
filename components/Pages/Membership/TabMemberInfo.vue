<template>
  <v-card
    color="#eeeeee"
    rounded="xl"
    class="components__tabMemberInfo"
    min-height="400"
  >
    <v-container v-if="loading" class="full-height center-all">
      <v-progress-circular
        indeterminate
        size="50"
        color="primary"
        class="d-flex my-auto"
      />
    </v-container>

    <v-tabs v-else v-model="tabs" grow background-color="transparent">
      <v-tab v-for="(item, index) in tabItems" :key="index">
        {{ item.title }}
      </v-tab>

      <v-tabs-items v-model="tabs" class="transparent">
        <v-tab-item v-for="(item, index) in tabItems" :key="index">
          <v-container class="pa-6">
            <component :is="item.component" v-bind:data="item.props" />
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script lang="ts">
import { debounce } from "lodash";
import { Component, mixins } from "nuxt-property-decorator";
import FormRequest from "~/mixins/FormRequest";
import MemberApplication from "~/types/memberApplication/memberApplication";
import User from "~/types/user";
import FormPersonal from "./FormPersonal.vue";

@Component({
  components: {
    FormPersonal
  }
})
export default class TabMemberInfo extends mixins(FormRequest) {
  tabs: number = 0;
  membershipApplication: MemberApplication = {
    approved_at: null,
    approved_by: null,
    approved_by_id: null,
    checked_at: null,
    checked_by: null,
    checked_by_id: null,
    created_at: null,
    id: null,
    member_info: null,
    status: null,
    status_description: null,
    submitted_at: null,
    surau_in_kariah: null,
    updated_at: null,
    user: null,
    user_id: null
  };

  debounceGetMembershipData = debounce(this.getMembershipData, 500);

  get tabItems() {
    return [
      {
        value: 0,
        title: this.$t("label.personalInfo"),
        component: "form-personal",
        props: this.membershipApplication
      },
      {
        value: 1,
        title: this.$t("label.address"),
        component: "",
        props: {}
      },
      {
        value: 2,
        title: this.$t("label.dependants"),
        component: "",
        props: {}
      }
    ];
  }

  get user(): User {
    let userRecord = this.$auth.user as any;
    return userRecord as User;
  }

  get hasApplication() {
    return this.membershipApplication.submitted_at != null;
  }

  mounted() {
    this.loading = true;
    this.debounceGetMembershipData();
  }

  async getMembershipData() {
    try {
      const {
        data
      } = await this.$api.easyKhairat.applicationApi.createOrGetApplication({
        user_id: this.user.id
      });

      this.membershipApplication = data;
    } catch (error) {
      this.handleRequestError(error);
    } finally {
      this.loading = false;
    }
  }
}
</script>
