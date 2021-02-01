<template>
  <button
    class="g-button"
    :disabled="disabled"
    type="button"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </button>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "GButton",
  props: {
    disabled: Boolean,
  },
  setup() {
    const textmsg = "I am Hello World Component";
    return {
      textmsg,
    };
  },
});
</script>

<style lang="css" scoped>
@import "./gbutton.css";
</style>
