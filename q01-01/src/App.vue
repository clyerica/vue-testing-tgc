<template>
  <div id="app">
    <span id='message'>{{msg}}</span>
    <button v-on:click="update" id="btn">Hello</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return {
      'msg':''
    }
  },
  methods:{
    'update':function(){
   
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
