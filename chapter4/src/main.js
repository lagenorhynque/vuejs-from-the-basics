const app = new Vue({
  el: '#app',
  data: {
    price: 19800,
    message: 'Hello Vue.js!'
  },
  filters: {
    localeNum(val) {
      return val.toLocaleString();
    },
    filter(message, foo, num) {
      console.log(message, foo, num);
    },
    round(val) {
      return Math.round(val * 100) / 100;
    },
    radian(val) {
      return val * Math.PI / 180;
    }
  }
});
