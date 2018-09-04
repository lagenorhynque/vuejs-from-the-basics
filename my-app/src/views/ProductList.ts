import { Vue, Component } from 'vue-property-decorator';
import products from '@/api/products.ts';

@Component
export default class ProductList extends Vue {
  get list() {
    return products.fetch();
  }
}
