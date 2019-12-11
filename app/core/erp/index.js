import find from 'lodash/find';
import { NotFoundError } from '../../util';
import { ERP_BASE } from '../../__mocks__/erp_database';
import { HTTPInterceptor } from '../../interceptors';

// TODO Adicionar database connection ao constructor
// TODO adicionar error default e logs

export default class ERPBase {
  constructor(options) {
    this.data = options.mock ? ERP_BASE : null;
  }

  activated() {
    return this.data.filter(elem => elem.enabled);
  }

  activatedActions() {
    return this.data.map(elem => elem.actions);
  }

  execute(actions, params) {
    this.result = [];
    const erp = find(this.activated(), { id: params.cod_erp });
    const http = new HTTPInterceptor(erp.url_base, erp.headers);
    actions.forEach(name => {
      const act = erp.actions.filter(elem => elem.name === name);
      if (act.length) {
        switch (act[0].method) {
          case 'GET':
            this.result.push(http.get(act[0].path, params));
            break;
          case 'POST':
            this.result.push(http.post(act[0].path, params));
            break;
          default:
            console.log(`Invalid Method in action ${act[0].name}|| ERP:${erp.name}`);
            break;
        }
      } else {
        this.result.push(
          new Promise((resolve, reject) => {
            reject(new NotFoundError(actions));
          })
        );
      }
    });
    return Promise.all(this.result);
  }

  executeInAll(action, params) {
    this.result = [];
    this.activated().forEach(erp => {
      const http = new HTTPInterceptor(erp.url_base, erp.headers);
      const act = erp.actions.filter(elem => elem.name === action);
      switch (act[0].method) {
        case 'GET':
          this.result.push(http.get(act[0].path, params));
          break;
        case 'POST':
          this.result.push(http.post(act[0].path, params));
          break;
        default:
          console.log(`Invalid Method in action ${act[0].name}|| ERP:${erp.name}`);
          break;
      }
    });
    return Promise.all(this.result);
  }
}
