<template>
  <v-menu
    class="components__languageSwitcher"
    close-on-click
    bottom
    nudge-bottom="50"
  >
    <template v-slot:activator="{ on, attrs }">
      <slot name="activator" v-bind="{ on, attrs }" />
    </template>

    <v-list>
      <v-list-item
        v-for="(item, index) in availableLocales"
        :key="index"
        link
        @click="onSwitch(item.code)"
      >
        <country-flag :country="item.flagCode" size="normal" rounded />
        <v-list-item-title class="mt-2 ml-3">{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import CountryFlag from "vue-country-flag";
import { Locale } from "@nuxtjs/i18n";

@Component({
  components: {
    CountryFlag
  }
})
export default class LanguageSwitcher extends Vue {
  get availableLocales() {
    return this.$i18n.locales;
  }

  onSwitch(langCode: Locale) {
    this.$i18n.setLocale(langCode);
  }
}
</script>

<style lang="scss" scoped></style>
