import Paciente from './index';
import { ERPBase } from '../../core';

export default class PacienteController extends Paciente {
  constructor() {
    const erp = new ERPBase({ mock: true });
    super(erp);
  }
}
