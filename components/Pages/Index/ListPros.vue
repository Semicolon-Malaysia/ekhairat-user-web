<template>
  <div class="components__listPros">
    <v-sheet class="list-sheet" color="#eeeeee" rounded="xl">
      <div class="pros-title">
        <h2 class="primary--text">{{ $t("label.services") }}</h2>
        <p class="text-h4 font-weight-black">
          {{ $t("label.khairatMadeEasy") }}
        </p>
      </div>

      <v-row justify="center" class="ma-0">
        <v-col
          class="pa-0"
          v-for="(item, index) in listPros"
          :key="index"
          cols="12"
          sm="6"
          md="4"
        >
          <v-card class="transparent" flat width="300">
            <v-icon large color="warning darken-1" v-text="item.icon" />

            <p class="ml-3 mb-0 text-h6 card-title">
              {{ item.title }}
            </p>

            <v-card-text>{{ item.description }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class ListPros extends Vue {
  get listPros() {
    return [
      {
        title: this.$t("label.registerYourMembership"),
        icon: "mdi-account-plus-outline",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
      },
      {
        title: this.$t("label.renewYourMembership"),
        icon: "mdi-update",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
      },
      {
        title: this.$t("label.makePaymentsOnline"),
        icon: "mdi-credit-card-marker-outline",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
      },
      {
        title: "Lapor Kematian",
        icon: "mdi-message-alert-outline",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
      },
      {
        title: "Kemaskini Maklumat Keahlian",
        icon: "mdi-file-document-multiple-outline",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
      },
      {
        title: "Notifikasi SMS & Emel",
        icon: "mdi-message-outline",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
      }
    ];
  }
}
</script>

<style lang="scss" scoped>
.components__listPros {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;

  .pros-title {
    max-width: 400px;
    word-wrap: break-word;
  }

  .card-title {
    word-wrap: break-word !important;
    max-width: 100%;
  }

  .list-sheet {
    padding: 24px;
  }
}
</style>
