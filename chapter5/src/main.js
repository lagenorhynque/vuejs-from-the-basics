Vue.component('comp-child', {
  template: '<p>{{ val }}</p>',
  props: ['val']
});

Vue.component('comp-item', {
  template: '<li>{{ name }} HP.{{ hp }}\
    <button @click="doAttack">Attack</button></li>',
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    hp: {
      type: Number,
      required: true
    }
  },
  methods: {
    doAttack() {
      this.$emit('attack', this.id);
    }
  }
});

Vue.component('comp-button', {
  template: '<button @click="handleClick">Fire event</button>',
  methods: {
    handleClick() {
      this.$emit('childs-event');
    }
  }
});

const bus = new Vue({
  data: {
    count: 0
  }
});

Vue.component('component-b', {
  template: '<p>bus: {{ bus.count }}</p>',
  computed: {
    bus() {
      return bus.$data;
    }
  },
  created: function () {
    bus.$on('bus-event', function () {
      this.count++;
    });
  }
});

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    list: [
      { id: 1, name: 'slime', hp: 100 },
      { id: 2, name: 'goblin', hp: 200 },
      { id: 3, name: 'dragon', hp: 500 }
    ]
  },
  methods: {
    parentsMethod() {
      alert('Caught an event!');
    },
    handleAttack(id) {
      const item = this.list.find(el => el.id === id);
      if (item !== undefined && item.hp >= 10) item.hp -= 10;
    }
  }
});
