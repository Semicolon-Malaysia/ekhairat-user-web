<template>
  <div class="components__qrCode center-all">
    <qrcode-vue :value="value" :size="size" level="H" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";
import QrcodeVue from "qrcode.vue";

@Component({
  components: {
    QrcodeVue
  }
})
export default class QrCode extends Vue {
  value: String = "http://localhost:8080/verifyMember/";
  size: Number = 200;
}
</script>

<style lang="scss" scoped></style>
