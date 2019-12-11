import Module from '../baseModule';
import { STATUS_API } from '../../__mocks__/template_feegow_erp';

import {
  DISPONIBILIDADE,
  STATUS,
  MOTIVOS,
  CANAIS,
  CANCELAR_AGENDAMENTO,
  LISTAR_AGENDAMENTOS,
  NOVO_AGENDAMENTO,
  REMARCAR_AGENDAMENTO
} from './constants';

// TODO check params >JOI<

export default class Agenda extends Module {
  static getDisponibilidadeERP(params) {
    return this.ERP.execute([DISPONIBILIDADE], params);
  }

  static getStatusERP(params) {
    return this.ERP.execute([STATUS], params);
  }

  static getMotivosERP(params) {
    return this.ERP.execute([MOTIVOS], params);
  }

  static getCanaisERP(params) {
    return this.ERP.execute([CANAIS], params);
  }

  static listarERP(params) {
    return this.ERP.execute([LISTAR_AGENDAMENTOS], params);
  }

  static criarERP(params) {
    return this.ERP.execute([NOVO_AGENDAMENTO], params);
  }

  static cancelarERP(params) {
    return this.ERP.execute([CANCELAR_AGENDAMENTO], params);
  }

  static remarcarERP(params) {
    return this.ERP.execute([REMARCAR_AGENDAMENTO], params);
  }

  get templateAction(action) { // TODO consultar API em base para trazer o template correto
    this.STATUS_API = STATUS_API;
    return this.STATUS_API;
  }

}
