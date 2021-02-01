<template>
  <div class="hello">
    <span
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam a
      reiciendis repudiandae veniam incidunt quia aspernatur laboriosam magnam,
      natus eligendi excepturi eveniet nihil nostrum praesentium animi inventore
      quidem aut. Nostrum vero nulla tempore a!</span
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HelloWorld",
  emits: {
    click: null
  },
  props: {
    gray: {
      type: Boolean,
      default: false
    }
  }
});
</script>
<style lang="css" scoped>
@import "./helloworld.css";
</style>
