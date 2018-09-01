const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    show: true,
    count: 0,
    list: ['apple', 'banana', 'strawberry']
  },
  methods: {
    handleClick: function (event) {
      alert(event.target);
    }
  }
});
