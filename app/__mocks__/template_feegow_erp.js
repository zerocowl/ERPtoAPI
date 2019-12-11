export const FEEGOW_OUT_TEMPLATE = {
  consulta: 'agenda',
  item: {
    type: 'tipo',
    description: 'info',
    pacient: 'paciente',
    date_time: 'data_hora'
  },
  each(item) {
    // make changes
    item.iterated = true;
    return item;
  }
};

export const OUT_STATUS = {
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
};

export const IN_STATUS = {
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
};
