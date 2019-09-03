<template>
    <div id="currentFilter">
            <button @click="handleStatus('all')" :class="{active:actived == 'all'}">all</button>
            <button @click="handleStatus('active')" :class="{active:actived == 'active'}">Active</button>
            <button @click="handleStatus('completed')" :class="{active:actived == 'completed'}" >Completed</button>
        </div> 
</template>
<script>
export default {
    name:'filterForm',
    data:function(){
        return{
            actived:''
        }
    },
    methods:{
        handleStatus:function(status){
            this.$emit("changeStatus",status);
            this.actived = status;
        }
    }    
}
</script>
<style scoped>

  button {
        margin: 0 10px;
        line-height: 20px;
    }

      .active {
        color: #f60;
        border: 1px solid #ccc;
        border-radius: 2px;
        padding: 3px;
        cursor: pointer;
    }
</style>
