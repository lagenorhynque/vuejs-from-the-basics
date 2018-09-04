import EditForm from '@/components/EditForm.vue';
import { Vue, Component } from 'vue-property-decorator';

@Component({
  components: {
    EditForm,
  },
})
export default class App extends Vue {
  get message(): string {
    return this.$store.getters.message;
  }
}
