<template>
  <div id="app">
    <div></div>
    <button>Increase Height</button>
    <button>Increase Width</button>
    <button>Red Background</button>
    <button>Blue Background</button>
    <button>Reset</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data: function () {
    return {
      bgcolor: "gray",
      width: 50,
      height: 50,
    };
  },
  methods:{
  
  },
  components: {},
};
</script>

<style scoped>

</style>
