import { DataTransform } from 'node-json-transform';
import { FEEGOW_TEMPLATE } from '../__mocks__/template_feegow_erp';

export default class TemplateEngine {
  // add getTemplate by COD_ERP
  toERP(data) {
    this.res = DataTransform(data, FEEGOW_TEMPLATE).transform();
    return this.res;
  }

  toAPI(data, template) {
    this.res = DataTransform(data, template).transform();
    return this.res;
  }
}
