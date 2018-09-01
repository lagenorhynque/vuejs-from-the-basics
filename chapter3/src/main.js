const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello!',
    checkboxVal: true,
    radioVal: '',
    selectSingleVal: '',
    selectMultipleVal: [],
    preview: '',
    rangeVal: 50,
    price: 100
  },
  methods: {
    handleChange(event) {
      const file = event.target.files[0];
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file);
      }
    }
  }
});
