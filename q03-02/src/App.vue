<template>
  <div id="app">
    <div class="box" ></div>
    <button>Red</button>
    <button>Green</button>
    <button>Blue</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return { bgcolor: "" };
  },
  components: {},
};
</script>

<style scoped>
.box {
  width: 50px;
  height: 50px;
  border: 1px solid black;
}
</style>

