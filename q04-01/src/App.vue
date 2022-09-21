<template>
  <div id="app">
    <message-box msg="Jack and Jill went up the hill"/>
  </div>
</template>

<script>
import MessageBox from '@/components/MessageBox.vue'
export default {
  name: 'App',
  components: {    
    MessageBox
  }
}
</script>


