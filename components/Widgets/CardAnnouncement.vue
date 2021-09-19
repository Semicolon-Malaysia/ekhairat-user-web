<template>
  <v-card class="components__cardAnnouncement transparent white--text" flat>
    <div class="center-between">
      <p class="mb-0 text-body-1">{{ item.title }}</p>
      <v-btn rounded small color="white">{{ $t("label.view") }}</v-btn>
    </div>
    <p class="text-subtitle-2">
      {{ item.date }}
    </p>

    <p class="item-text text-body-2">{{ item.text }}</p>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class CardAnnouncement extends Vue {
  @Prop({ required: true, type: Object }) item!: Object;
}
</script>

<style lang="scss" scoped>
.components__cardAnnouncement {
  .item-text {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
