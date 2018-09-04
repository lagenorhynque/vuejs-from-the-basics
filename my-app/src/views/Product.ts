import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { mapGetters } from 'vuex';
import products from '@/api/products.ts';

@Component({
  computed: mapGetters('product', ['detail']),
})
export default class Product extends Vue {
  @Prop(Number)
  public id!: number;

  @Watch('id', { immediate: true })
  public onIdChange() {
    this.$store.dispatch('product/load', this.id);
  }

  public beforeDestroy() {
    this.$store.dispatch('product/destroy');
  }
}
