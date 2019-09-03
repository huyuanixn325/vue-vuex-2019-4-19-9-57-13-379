<template>
     <div id="createForm">
        <input type="text" v-bind:value="inputtingText" @change="handleChange">
        <button @click="handleTodo">add</button>
    </div> 
</template>
<script>
    export default {
        name:'create-form',
        computed:{
            inputtingText:function(){
                return this.$store.state.inputtingText;
            }
        },
        methods:{
            handleTodo:function(){
                this.$store.commit("addTodoLists",this.$store.state.inputtingText);
            },
            handleChange:function(event){
                console.log(event);
                this.$store.state.inputtingText = event.target.value;
            }
        }
    }
</script>
