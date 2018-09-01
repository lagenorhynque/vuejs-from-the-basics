const app = new Vue({
  el: '#app',
  data: {
    list: [],
    current: '',
    topics: [
      { value: 'vue', name: 'Vue.js' },
      { value: 'jQuery', name: 'jQuery' }
    ]
  },
  watch: {
    current(val) {
      axios.get('https://api.github.com/search/repositories', {
        params: { q: 'topic:' + val }
      }).then(response => {
        this.list = response.data.items;
      });
    }
  }
});
