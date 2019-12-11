export const ERP_BASE = [
  {
    id: '1',
    name: 'Feegow MOCK',
    enabled: true,
    description: 'Feegow ERP',
    url_base: 'https://0db09cac-ee4b-48a1-9a8b-a3232edabb02.mock.pstmn.io',
    token: 'c4efee8a042b43d189e5fd2a51d9e6c3',
    headers: {
      'access-Control-Allow-Origin': '*',
      'x-api-key': 'c4efee8a042b43d189e5fd2a51d9e6c3'
    },
    actions: [
      {
        name: 'agendaDisponibilidade',
        path: '/appoints/available-schedule',
        method: 'GET',
        params: { query: ['profissional_id', 'pacient_id', 'data_start', 'data_end'] }
      },
      {
        name: 'agendaStatus',
        path: '/appoints/status',
        method: 'GET',
        template: {
          in: {
            list: 'content',
            item: {
              id: 'cod',
              status: 'status'
            },
            each(item) {
              // make changes
              // item.iterated = true;
              return item;
            }
          },
          out: {
            list: 'content',
            item: {
              cod: 'id',
              status: 'status'
            },
            each(item) {
              // make changes
              // item.iterated = true;
              return item;
            }
          }
        }
      },
      { name: 'agendaMotivos', path: '/appoints/motives', method: 'GET' },
      { name: 'agendaCanais', path: '/appoints/list-channel', method: 'GET' },
      {
        name: 'agendaListarAgendamento',
        path: '/appoints/search',
        method: 'GET',
        params: {
          query: ['profissional_id', 'paciente_id', 'data_start', 'data_end']
        }
      },
      {
        name: 'agendaNovoAgendamento',
        path: '/appoints/new-appoint',
        method: 'POST',
        params: {
          body: [
            'local_id',
            'paciente_id',
            'profissional_id',
            'procedimento_id',
            'especialidade_id',
            'data',
            'horario',
            'valor',
            'plano',
            'canal_id'
          ]
        }
      },
      {
        name: 'agendaCancelarAgendamento',
        path: '/appoints/cancel-appoint',
        method: 'POST',
        params: {
          body: ['agendamento_id', 'motivo_id', 'obs']
        }
      },
      {
        name: 'agendaRemarcarAgendamento',
        path: '/appoints/reschedule',
        method: 'POST',
        params: {
          body: ['agendamento_id', 'motivo_id', 'data', 'horario', 'obs']
        }
      }
    ]
  },
  {
    id: '2',
    name: 'Feegow',
    enabled: false,
    description: 'Feegow ERP',
    url_base: 'https://0db09cac-ee4b-48a1-9a8b-a3232edabb02.mock.pstmn.io',
    token: 'xpto',
    headers: {
      'access-Control-Allow-Origin': '*',
      'x-api-key': 'c4efee8a042b43d189e5fd2a51d9e6c3'
    },
    actions: [
      {
        name: 'agendaDisponibilidade',
        path: '/appoints/available-schedule',
        method: 'GET',
        params: { query: 'profissional_id;pacient_id;data_start;data_end' }
      },
      { name: 'agendaStatus', path: '/appoints/status', method: 'GET' }
    ]
  }
];
