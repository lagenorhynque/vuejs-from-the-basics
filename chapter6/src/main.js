const app = new Vue({
  el: '#app',
  data: {
    order: false,
    list: [
      { id: 1, name: 'apple', price: 100 },
      { id: 2, name: 'banana', price: 200 },
      { id: 3, name: 'strawberry', price: 300 }
    ]
  },
  computed: {
    sortedList() {
      return _.orderBy(this.list, 'price', this.order ? 'desc' : 'asc');
    }
  }
});
