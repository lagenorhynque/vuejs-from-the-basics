const app = new Vue({
  el: '#app',
  data: {
    message: {
      value: 'Hello Vue.js!'
    },
    list: ['apple', 'banana', 'strawberry'],
    num: 1,
    count: 0,
    classObject: {
      child: true,
      'is-active': true
    },
    styleObject: {
      color: 'red',
      backgroundColor: 'lightgray'
    },
    radius: 50
  },
  methods: {
    increment() {
      this.count += 1;
    }
  }
});
