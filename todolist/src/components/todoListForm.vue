<template>
     <div id="list">
            <ul>
                <li v-for="(todo,index) in filterTodoList" :key="index">
                  <input type="checkbox" id="index" v-model="todo.checkd" @change="changeTodoStatus(todo)">
                  <span v-if="todo.checkd" class='checked'>{{todo.content}}</span>
                  <span v-else>{{todo.content}}</span>
                </li>
            </ul>
        </div> 
</template>
<script>
    export default {
        name:'filterForm',
        computed:{
            filterTodoList:function(){
               return this.$store.getters.filterTodoList;
         }   
        },
        methods:{
          changeTodoStatus:function(todo){
              if(!todo.checked){
                  todo.status='completed';
                  todo.checked = true;
                  } 
              else{ 
                  todo.status='active';
                  todo.checked=false;
                  }
              this.$store.commit("updateTodoList",todo);
             
          }  
        }
    }
</script>
<style>
  ul{
        margin:0 auto;
        display:block;
        padding:0px;
    }

    .checked{
    text-decoration:line-through;
    }
    
</style>
