const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    handleClick() {
      alert('Clicked!');
    },
    handleInput(event) {
      this.message = event.target.value;
    },
    handler(comment) {
      console.log(comment);
    }
  }
});
