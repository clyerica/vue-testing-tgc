<template>
  <div id="app">
    <traffic-light></traffic-light>
    <button>Go</button>
    <button>Wait</button>
    <button>Stop</button>
  </div>
</template>

<script>
import TrafficLight from '@/TrafficLight.vue'

export default {
  name: 'App',
  data:function(){
    return {
      status:''
    }
  },
  components: {
    TrafficLight
  }
}
</script>