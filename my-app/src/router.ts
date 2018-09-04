import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import Product from '@/views/Product.vue';
import ProductList from '@/views/ProductList.vue';
import ProductHome from '@/views/Product/Home.vue';
import ProductReview from '@/views/Product/Review.vue';
import ProductReviewDetail from '@/views/Product/ReviewDetail.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { name: 'home', path: '/', component: Home },
    { name: 'product-list', path: '/product', component: ProductList },
    {
      path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({ id: parseInt(route.params.id, 10) }),
      children: [
        {
          name: 'product-home',
          path: '',
          component: ProductHome,
        },
        {
          name: 'product-review',
          path: 'review',
          component: ProductReview,
        },
        {
          name: 'review-detail',
          path: 'review/:rid(\\d+)',
          component: ProductReviewDetail,
        },
      ],
    },
  ],
});
export default router;
