<template>
  <div id="app">
    <CreateForm @addTodo="addTodoLists"></CreateForm>
    <TodoListForm :filterTodoList="filterTodoList" @changeTodoStatus="updateTodoList"></TodoListForm>
    <FilterForm @changeStatus="handleStatus"></FilterForm>
  </div>
</template>

<script>
  import CreateForm from './components/createForm.vue'
  import TodoListForm from './components/todoListForm.vue'
  import FilterForm from './components/filterForm.vue'
  export default {
    name: 'app',
    components: {
      CreateForm,
      TodoListForm,
      FilterForm
    },
    
      computed:{
            filterTodoList:function(){
                  let filterTodoList = [];
                  this.$store.state.todoList.forEach(element => {
                      if(element.status === this.$store.state.currentFilter ||this.$store.state.currentFilter === 'all'){
                          filterTodoList.push(element);
                      }
                  });
                  return filterTodoList;
              }
          },
            methods:{
              addTodoLists:function(inputtingText){
                 // console.log("31",this.todoList);
                  this.$store.state.todoList.push({
                      content:inputtingText,
                      status:'active',
                      checkd:false
                  }); 
              },
                handleStatus:function(status){
                    this.$store.state.currentFilter=status;
                },
                updateTodoList:function(todo){
                 this.$store.state.todoList.forEach(Element=>{
                    if(Element.content==todo.content){
                      Element.status=todo.status;
                    }
                  })
                } 
          }
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
