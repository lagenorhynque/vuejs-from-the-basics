import Vue from 'vue';
import products from '@/api/products.ts';
import { Product } from '@/api/products.ts';

interface Data {
  item: Product | null;
}

export default Vue.extend({
  props: { id: Number },
  data() {
    return {
      item: null,
    } as Data;
  },
  watch: {
    id: {
      handler() {
        products.asyncFind(this.id, item => {
          if (item) {
            this.item = item;
          }
        });
      },
      immediate: true,
    },
  },
});
