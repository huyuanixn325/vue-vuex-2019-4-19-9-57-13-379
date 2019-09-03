<template>
    <div id="currentFilter">
            <button @click="handleStatus('all')">all</button>
            <button @click="handleStatus('active')">Active</button>
            <button @click="handleStatus('completed')">Completed</button>
        </div> 
</template>
<script>
export default {
    name:'filterForm',
    methods:{
        handleStatus:function(status){
            this.$emit("changeStatus",status);
        }
    }    
}
</script>
<style>

</style>
