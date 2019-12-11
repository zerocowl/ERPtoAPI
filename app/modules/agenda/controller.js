import Agenda from './index';
import { ERPBase } from '../../core';
import { STATUS_OUT } from '../../__mocks__/template_feegow_erp';

export default class AgendaController extends Agenda {
  constructor() {
    const erp = new ERPBase({ mock: true });
    super(erp);
  }

  statusERP(req, res) {
    super
      .getStatusERP()
      .then(data => {
        const result = rt.toAPI(data[0], STATUS_OUT);
        return res.json({
          messsage: 'sucesso',
          status: 200,
          data: result
        });
      })
      .catch(error => {
        console.log(error);
        return res.json({
          messsage: error,
          status: 400
        });
      });
  }

  disponibilidadeERP(req, res) {
    super
      .getDisponibilidadeERP(req.query)
      .then(result => {
        res.json({
          messsage: 'sucesso',
          status: 200,
          data: result
        });
      })
      .catch(error => {
        res.json({
          messsage: error,
          status: 400
        });
      });
  }

  motivosERP(req, res) {
    super
      .getMotivosERP(req.query)
      .then(result => {
        res.json({
          messsage: 'sucesso',
          status: 200,
          data: result
        });
      })
      .catch(error => {
        res.json({
          messsage: error,
          status: 400
        });
      });
  }

  canaisERP(req, res) {
    super
      .getCanaisERP(req.query)
      .then(result => {
        res.json({
          messsage: 'sucesso',
          status: 200,
          data: result
        });
      })
      .catch(error => {
        res.json({
          messsage: error,
          status: 400
        });
      });
  }

  listarAgendamentosERP(req, res) {
    super
      .listarERP(req.query)
      .then(result => {
        res.json({
          messsage: 'sucesso',
          status: 200,
          data: result
        });
      })
      .catch(error => {
        res.json({
          messsage: error,
          status: 400
        });
      });
  }

  criarERP(req, res) {
    super
      .criarERP(req.body)
      .then(result => {
        res.json({
          messsage: 'sucesso',
          status: 200,
          data: result
        });
      })
      .catch(error => {
        res.json({
          messsage: error,
          status: 400
        });
      });
  }

  cancelarERP(req, res) {
    super
      .cancelarERP(req.body)
      .then(result => {
        res.json({
          messsage: 'sucesso',
          status: 200,
          data: result
        });
      })
      .catch(error => {
        res.json({
          messsage: error,
          status: 400
        });
      });
  }

  remarcarERP(req, res) {
    super
      .remarcarERP(req.body)
      .then(result => {
        res.json({
          messsage: 'sucesso',
          status: 200,
          data: result
        });
      })
      .catch(error => {
        res.json({
          messsage: error,
          status: 400
        });
      });
  }
}
