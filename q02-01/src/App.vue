<template>
  <div id="app">
    <button id="apple-btn" v-on:click="setApple">Apple</button>
    <button id="orange-btn" v-on:click="setOrange">Orange</button>
    <div id="apple-display" style='background-color:red'>Apple</div>
    <div id="orange-display" style='background-color:orange'>Orange</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:function(){
    return {
      'selected':''
    }
  },
  components: {
    
  },
  methods:{
    'setApple':function(){
     
    },
    'setOrange':function(){
 
    }
  }
}
</script>


