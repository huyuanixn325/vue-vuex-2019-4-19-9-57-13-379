<template>
  <div id="app">
    <CreateForm @addTodo="addTodoLists"></CreateForm>
    <TodoListForm :filterTodoList="todoList"></TodoListForm>
  </div>
</template>

<script>
import CreateForm from './components/createForm.vue'
import TodoListForm from './components/todoListForm.vue'
export default {
  name: 'app',
  components: {
    CreateForm,
    TodoListForm
  },
  data: function () {
            return {
                /**
                 * 定义了 todo item 中属性为 {content:'吃饭',status:'active'}
                 * 定义了 todo 的两种状态 completed、active，默认为 active
                 */
                inputtingText:'',
                todoList: [
                            {content:"吃饭",status:'active'},
                            {content:"购物",status:'completed'}
                            ],
                currentFilter: 'completed'
            }
        },
          methods:{
            addTodoLists:function(inputtingText){
                console.log("31",this.todoList);
                this.todoList.push({
                    content:inputtingText,
                    status:'active'
                });  
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
