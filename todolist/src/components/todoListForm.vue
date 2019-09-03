<template>
     <div id="list">
            <ul>
                <li v-for="(todo,index) in filterTodoList" :key="index">
                  {{todo.content}}
                </li>
            </ul>
        </div> 
</template>
<script>
    export default {
        name:'filterForm'
        ,props:{
            filterTodoList:Array
            }
    }
</script>
<style>
  ul{
        margin:0 auto;
        display:block;
        padding:0px;
    }
</style>
