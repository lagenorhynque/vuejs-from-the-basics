Vue.component('my-component-a', {
  template: '<div class="my-component-a">Component A</div>'
});

Vue.component('my-component-b', {
  template: '<div class="my-component-b">Component B</div>'
});

Vue.component('comp-board', {
  template: '<div>Message Board</div>'
});

Vue.component('comp-form', {
  template: '<div>Form<textarea v-model="message"></textarea></div>',
  data: function () {
    return { message: '' };
  }
});

const app = new Vue({
  el: '#app',
  data: {
    componentTypes: ['my-component-a', 'my-component-b'],
    current: 0,
    currentView: 'comp-board'
  },
  computed: {
    component() {
      return this.componentTypes[this.current];
    }
  }
});
