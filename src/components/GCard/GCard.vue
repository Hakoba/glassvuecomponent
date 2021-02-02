<template>
  <div class="g-card" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
import { defineComponent, onMounted, reactive } from "vue";

export default defineComponent({
  name: "GCard",
  props: {
    width: {
      type: String,
      required: false,
      default: undefined,
    },
    opacity: {
      type: String,
      required: false,
      default: undefined,
    },
    height: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  setup(props) {
    // const  = props;
    const styles = reactive({
      width: props.width,
      height: props.height,
      opacity: props.opacity,
    });
    onMounted(() => {
      console.log("mounted!");
    });
    return {
      styles,
    };
  },
});
</script>

<style lang="css" scoped>
@import "./gcard.css";
</style>
