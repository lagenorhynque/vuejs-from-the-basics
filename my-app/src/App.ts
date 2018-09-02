import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'app',
  components: {
    HelloWorld,
  },
  created() {
    console.log(this.$store.state.count);
    this.$store.commit('increment');
  },
});
