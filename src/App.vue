<template>
  <section>
    <div class="d-flex direction-column">

    <div>
      <h1>Button</h1>
      <GButton>Button text</GButton>
    </div>
     
    </div>
   
  </section>
</template>

<script>
import GButton from "./components/GButton/GButton.vue";

export default {
  name: "App",
  components: {
    GButton,
  },
};
</script>

<style>
@import "@css/main.css";


section {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom, #ff4f8b, #dff1ff);
}
</style>
