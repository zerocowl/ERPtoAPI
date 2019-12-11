import AgendaController from './controller';

const controller = new AgendaController();

const route = [
  {
    method: 'get',
    path: '/erp/agenda/status',
    name: 'agenda-status',
    version: 'v1.0.0',
    useWrap: true,
    handler: (req, res) => controller.statusERP(req, res)
  },
  {
    method: 'get',
    path: '/erp/agenda/disponibilidade',
    name: 'agenda-disponibilidade',
    version: 'v1.0.0',
    useWrap: true,
    handler: (req, res) => controller.disponibilidadeERP(req, res)
  },
  {
    method: 'get',
    path: '/erp/agenda/motivos',
    name: 'agenda-motivos',
    version: 'v1.0.0',
    useWrap: true,
    handler: (req, res) => controller.motivosERP(req, res)
  },
  {
    method: 'get',
    path: '/erp/agenda/canais',
    name: 'agenda-canais',
    version: 'v1.0.0',
    useWrap: true,
    handler: (req, res) => controller.canaisERP(req, res)
  },
  {
    method: 'get',
    path: '/erp/agenda/listar',
    name: 'agenda-listar-agendamento',
    version: 'v1.0.0',
    useWrap: true,
    handler: (req, res) => controller.listarAgendamentosERP(req, res)
  },
  {
    method: 'get',
    path: '/erp/agenda/disponibilidade',
    name: 'agenda-disponibilidade',
    version: 'v1.0.0',
    useWrap: true,
    handler: (req, res) => controller.disponibilidadeERP(req, res)
  }
];
