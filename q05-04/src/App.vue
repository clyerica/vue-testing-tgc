<template>
  <div id="app">
    <div id="lights">
    </div>
    <input type="radio"/><label>Red</label>
    <input type="radio"/><label>Green</label>
    <input type="radio"/><label>Yellow</label>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style scoped>
#lights {
  background-color: white;
  height: 50px;
  width: 50px;
  border: 1px solid black;
}
</style>


