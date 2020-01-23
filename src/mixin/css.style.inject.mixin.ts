import Vue from 'vue';
import { Mixin } from 'vue-mixin-decorator';
import styleSheetsService from '@/services/stylesheet-service.ts';

@Mixin
export default class CSSStyleInjectionMixin extends Vue {
  mounted(): void {
    /*styleSheetsService.updateRootCssVariable();*/
  }
}
