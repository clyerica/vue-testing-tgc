<template>
    <div>
        {{msg}}
    </div>
</template>

<script>
export default {
   props:['msg']
}
</script>

<style scoped>
div {
    background-color: 'azure';
    padding: '20px';
}
</style>