export default{
    state: {
      // 应用的数据
      inputtingText:'',
      todoList: [
        {content:"吃饭",status:'active',checkd:false},
        {content:"购物",status:'completed',checkd:true}
        ],
        currentFilter: 'completed'
    },
    getters:{
        filterTodoList:function(state){
            let filterTodoList=[];
            state.todoList.forEach(element => {
                if(element.status === state.currentFilter ||state.currentFilter === 'all'){
                    filterTodoList.push(element);
                }
            });
           return filterTodoList;
        }
        },
    mutations:{
        addTodoLists:function(state,inputtingText){
            state.todoList.push({
             content:inputtingText,
             status:'active',
             checkd:false
         });  
     },
     handleStatus:function(state,status){
        state.currentFilter=status;
    },
    updateTodoList:function(state,todo){
        state.todoList.forEach(Element=>{
           if(Element.content===todo.content){
             Element=todo;
           }
         })
    } ,
  
    }
  }