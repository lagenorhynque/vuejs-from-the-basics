import Vue from 'vue';

export default Vue.extend({
  name: 'EditForm',
  computed: {
    message: {
      get(): string {
        return this.$store.getters.message;
      },
      set(val: string) {
        this.$store.dispatch('doUpdate', val);
      },
    },
  },
});
