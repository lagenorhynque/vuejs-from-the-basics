const app = new Vue({
  el: '#app',
  data: {
    width: 800,
    height: 600,
    budget: 300,
    order: false,
    limit: 2,
    list: [
      { id: 1, name: 'apple', price: 100 },
      { id: 2, name: 'banana', price: 200 },
      { id: 3, name: 'strawberry', price: 400 },
      { id: 4, name: 'orange', price: 300 },
      { id: 5, name: 'melon', price: 500 },
    ]
  },
  computed: {
    halfWidth: {
      get: function () {
        return this.width / 2;
      },
      set: function (val) {
        this.width = val * 2;
      }
    },
    halfHeight() {
      return this.height / 2;
    },
    halfPoint() {
      return {
        x: this.halfWidth,
        y: this.halfHeight
      };
    },
    computedData() {
      return Math.random();
    },
    matched() {
      return this.list.filter(el => el.price <= this.budget);
    },
    sorted() {
      return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc');
    },
    limited() {
      return this.sorted.slice(0, this.limit);
    }
  },
  methods: {
    methodsData() {
      return Math.random();
    }
  }
});
