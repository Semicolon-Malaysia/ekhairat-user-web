<template>
  <div id="ads-leaderboard" class="center-all">
    <Adsense
      data-ad-client="pub-2352498086395221"
      data-ad-slot="3972920689"
      data-ad-format="auto"
      root-class="components__adsLeaderboard"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "nuxt-property-decorator";

@Component({})
export default class AdsLeaderboard extends Vue {
  adsenseContent: any = "";

  // mounted() {
  //   this.adsenseContent = document.getElementById("ads-leaderboard")?.innerHTML;
  // }
}
</script>

<style lang="scss" scoped>
.components__adsLeaderboard {
  background: #eeeeee;
  margin: 0 auto;
  width: 729px;
  height: 90px;
}
</style>
