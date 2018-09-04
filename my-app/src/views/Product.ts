import Vue from 'vue';
import { mapGetters } from 'vuex';
import products from '@/api/products.ts';
import { Product } from '@/api/products.ts';

export default Vue.extend({
  props: { id: Number },
  computed: mapGetters('product', ['detail']),
  watch: {
    id: {
      handler() {
        this.$store.dispatch('product/load', this.id);
      },
      immediate: true,
    },
  },
  beforeDestroy() {
    this.$store.dispatch('product/destroy');
  },
});
