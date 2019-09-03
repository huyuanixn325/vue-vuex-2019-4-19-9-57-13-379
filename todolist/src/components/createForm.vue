<template>
     <div id="createForm">
        <input type="text" v-bind:value="inputtingText" @change="handleChange">
        <button @click="handleTodo">add</button>
    </div> 
</template>
<script>
    export default {
        name:'create-form',
        data:function(){
            return{
                inputtingText:"" 
            }
        },
        methods:{
            handleTodo:function(){
                this.$emit("addTodo",this.inputtingText);
            },
            handleChange:function(event){
                console.log(event);
                this.inputtingText = event.target.value;
            }
        }
    }
</script>
