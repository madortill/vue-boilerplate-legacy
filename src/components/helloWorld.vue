<template>
    <div>clicks: {{ clicks}}</div>
    <button @click="clicks++">click me!</button>
</template>


<script>
    export default {
        data() {
            return {
                clicks: 0
            }
        }
    }
</script>


<style>


</style>
