import Vue from 'vue';
import EditForm from '@/components/EditForm.vue';

export default Vue.extend({
  name: 'app',
  components: {
    EditForm,
  },
  computed: {
    message(): string {
      return this.$store.getters.message;
    },
  },
});
