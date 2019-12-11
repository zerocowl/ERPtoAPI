#BayMax

## TEMPLATE WORKER

Todo ERP possui seus arquivos de IN e OUT para cada ACTION, sendo IN voltado para processos onde a API DoutorJA
responde ao ERP e OUT para o inverso.

### **Exemplo**: **ACTION STATUS**

```javascript
const act_status = {
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
}
```
