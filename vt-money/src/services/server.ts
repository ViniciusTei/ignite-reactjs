import { createServer, Model } from "miragejs"

export function makeServer() {
  return createServer({
    models: {
      transaction: Model
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Dev front-end',
            type: 'deposit',
            category: 'dev',
            amount: 2500,
            created_at: new Date(),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'casa',
            amount: 300,
            created_at: new Date(),
          }
        ]
      })
    },
    routes() {
        this.namespace = 'api';
        this.get('/transactions', () => {
          return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
          const data = JSON.parse(request.requestBody)
          const newData = {...data, created_at: new Date().toString(), id: schema.all('transaction').length + 1}
          
          return schema.create('transaction', newData)
        })
      }
  })
}