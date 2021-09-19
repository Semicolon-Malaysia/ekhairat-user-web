<template>
  <div class="components__messageBar inner-section">
    <div class="slide-right">
      <p :class="textColor">This is the text message</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "nuxt-property-decorator";

@Component({})
export default class MessageBar extends Vue {
  @Prop({ type: String, required: true }) message!: string;
  @Prop({ type: String, required: false, default: "message" }) type?: string;

  get textColor() {
    if (this.type == "error") return "error--text";
    else if (this.type == "success") return "primary--text";
    else return "grey--text";
  }
}
</script>

<style lang="scss" scoped>
.components__messageBar {
  background: #eeeeee;
  margin-bottom: 12px;
  padding: 4px;

  .slide-right {
    width: 100%;
    overflow: hidden;
    // margin-left: 300px;
    max-width: 500px;

    p {
      margin-bottom: 0;
      animation: 1s slide-right 2s forwards;
      transform: translateX(-100%);
    }
  }
  @keyframes slide-right {
    to {
      transform: translateX(0);
    }
  }
}
</style>
