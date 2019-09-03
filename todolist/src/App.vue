<template>
  <div id="app">
    <CreateForm></CreateForm>
    <TodoListForm></TodoListForm>
    <FilterForm></FilterForm>
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
