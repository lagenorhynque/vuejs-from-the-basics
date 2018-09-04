import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
import ProductList from '@/views/ProductList.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'product-list', path: '/product', component: ProductList },
    {
      name: 'product-info',
      path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({ id: parseInt(route.params.id, 10) }),
    },
  ],
});
export default router;
