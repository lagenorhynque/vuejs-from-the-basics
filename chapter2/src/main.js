const app = new Vue({
  el: '#app',
  data: {
    name: 'chimera',
    list: []
  },
  created: function () {
    axios.get('list.json')
      .then(response => {
        this.list = response.data;
        this.list.forEach(item => {
          this.$set(item, 'active', false);
        });
      }).catch(e => {
        console.error(e);
      });
  },
  methods: {
    doAdd() {
      const max = this.list.reduce((a, b) => a.id > b.id ? a.id : b.id, 0);
      this.list.push({
        id: max + 1,
        name: this.name,
        hp:500
      });
    },
    doRemove(index) {
      this.list.splice(index, 1);
    },
    doAttack(index) {
      this.list[index].hp -= 10;
    }
  },
});
