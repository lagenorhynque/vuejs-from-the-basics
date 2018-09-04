import { Vue, Component } from 'vue-property-decorator';

@Component
export default class EditForm extends Vue {
  get message(): string {
    return this.$store.getters.message;
  }
  set message(val: string) {
    this.$store.dispatch('doUpdate', val);
  }
}
