const state = { count: 0 };

const app = new Vue({
  el: '#app',
  data: {
    message: 'Vue.js!',
    state: state,
    nextTodoText: '',
    visitCount: 0,
    hideCompletedTodos: false,
    todos: [],
    error: null
  }
});

state.count++;
