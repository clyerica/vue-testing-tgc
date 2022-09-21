<template>
  <div id="app">
    <h1>Hello</h1>
    <span id="msg">Hello World</span>
    <button id="btn" v-on:click="makeLarger">Make Larger</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: function(){
    return {
      'textSize':'24px'
    }
  },
  methods:{
    'makeLarger':function(){
    
    }
  },
  components: {
   
  }
}
</script>


