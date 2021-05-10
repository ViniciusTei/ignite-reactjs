import { createServer } from "miragejs"

export function makeServer() {
  return createServer({
    routes() {
        this.namespace = 'api';
        this.get('/transactions', () => {
          return [
            {
              id: 1,
              title: 'Gas de cozinha',
              amount: 90,
              type: 'withdraw',
              category: 'Casa',
              created_at: new Date(),
            }
          ]
        })
      }
  })
}