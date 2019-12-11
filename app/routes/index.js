import { Router } from 'express';
import Agenda from '../modules';
import TemplateEngine from '../helpers/templateEngine';
import { ERPBase } from '../core';
// TODO create coontrollers and organize routes
// TODO passar para IoC

const routes = Router();
const erp = new ERPBase({ mock: true });
const rt = new TemplateEngine();

routes.get('/', (req, res) => {
  res.json({ index: { title: 'BayMax' } });
});

routes.post('/teste', (req, res) => {
  res.json({ message: rt.toAPI(req.body) });
});

routes.get('/erp/agenda/disponibilidade', (req, res) => {
  // TODO auto routes creator
  const agenda = new Agenda(erp);
  agenda
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
});


export default routes;
