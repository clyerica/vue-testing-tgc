<template>
  <div id="app">
    <div id="lights">
    </div>
    <select>
      <option value="red">Red</option>
      <option value="green">Green</option>
      <option value="blue">Blue</option>
    </select>
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


