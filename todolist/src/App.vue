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
    data: function () {
              return {
                  /**
                   * 定义了 todo item 中属性为 {content:'吃饭',status:'active'}
                   * 定义了 todo 的两种状态 completed、active，默认为 active
                   */
                  inputtingText:'',
                  todoList: [
                              {content:"吃饭",status:'active',checkd:false},
                              {content:"购物",status:'completed',checkd:true}
                              ],
                  currentFilter: 'completed'
              }
          },computed:{
            filterTodoList:function(){
                  let filterTodoList = [];
                  this.todoList.forEach(element => {
                      if(element.status === this.currentFilter || this.currentFilter === 'all'){
                          filterTodoList.push(element);
                      }
                  });
                  return filterTodoList;
              }
          },
            methods:{
              addTodoLists:function(inputtingText){
                  console.log("31",this.todoList);
                  this.todoList.push({
                      content:inputtingText,
                      status:'active',
                      checkd:false
                  }); 
              },
                handleStatus:function(status){
                    this.currentFilter=status;
                },
                updateTodoList:function(todo){
                  this.todoList.forEach(Element=>{
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
