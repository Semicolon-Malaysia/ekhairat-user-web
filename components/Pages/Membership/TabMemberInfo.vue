<template>
  <v-card color="#eeeeee" rounded="xl" class="components__tabMemberInfo">
    <v-tabs v-model="tabs" grow background-color="transparent">
      <v-tab v-for="(item, index) in tabItems" :key="index">
        {{ item.title }}
      </v-tab>
      <v-tabs-items v-model="tabs" class="transparent">
        <v-tab-item v-for="(item, index) in tabItems" :key="index">
          <v-container>
            {{ item.value }}
          </v-container>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class TabMemberInfo extends Vue {
  tabs: number = 0;
  get tabItems() {
    return [
      {
        value: 0,
        title: this.$t("label.personalInfo"),
        component: ""
      },
      {
        value: 1,
        title: this.$t("label.address"),
        component: ""
      },
      {
        value: 2,
        title: this.$t("label.dependants"),
        component: ""
      }
    ];
  }
}
</script>
