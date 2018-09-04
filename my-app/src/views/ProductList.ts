import Vue from 'vue';
import products from '@/api/products.ts';

export default Vue.extend({
  computed: {
    list: () => products.fetch(),
  },
});
