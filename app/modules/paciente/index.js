import Module from '../baseModule';

import { LISTAR, STATUS } from './constants';

export default class Paciente extends Module {
  static getLocaisERP(params) {
    return this.ERP.execute([LISTAR], params);
  }

  static getEmpresasERP(params) {
    return this.ERP.execute([STATUS], params);
  }
}
