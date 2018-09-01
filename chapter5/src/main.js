Vue.component('my-global-component', {
  template: '<p>My Global Component</p>'
});

const myLocalComponent = {
  template: '<p>My Local Component</p>'
};

Vue.component('my-component', {
  template: '<p>{{ message }}</p>',
  data: function () {
    return {
      message: 'Hello Vue.js!'
    };
  }
});

const app = new Vue({
  el: '#app',
  components: {
    'my-local-component': myLocalComponent
  }
});
