const app = new Vue({
  el: '#app',
  data: {
    show: true
  },
  mounted: function () {
    console.log(this.$el);
    console.log(this.$refs.hello);
  },
  methods: {
    handleClick() {
      const count = this.$refs.count;
      if (count) {
        count.innerText = parseInt(count.innerText, 10) + 1;
      }
    }
  }
});
