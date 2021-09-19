<template>
  <div class="components__listPros inner-section">
    <v-sheet class="list-sheet" color="#eeeeee" rounded="xl">
      <v-row>
        <v-col cols="12" sm="4">
          <h2 class="primary--text">{{ $t("label.services") }}</h2>
          <p class="text-h3 font-weight-black">
            {{ $t("label.khairat") }} <br />
            {{ $t("label.madeEasy") }}
          </p>
        </v-col>
        <v-col cols="12" sm="8">
          <v-row class="inner-section" justify="center">
            <v-col v-for="(item, index) in listPros" :key="index" cols="4">
              <v-card class="transparent" flat width="300">
                <v-icon large color="warning darken-1" v-text="item.icon" />
                <v-card-title>{{ item.title }}</v-card-title>
                <v-card-text>{{ item.description }}</v-card-text>
              </v-card>
            </v-col>
          </v-row>
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
        title: "Pendaftaran Ahli Baru",
        icon: "mdi-account-plus-outline",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
      },
      {
        title: "Pembaharuan Keahlian",
        icon: "mdi-update",
        description:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis"
      },
      {
        title: "Pembayaran Atas Talian",
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
  margin-bottom: 100px;
  // background: #eeeeee;

  .list-sheet {
    padding: 50px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
