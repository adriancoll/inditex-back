import express from 'express'
import cors from 'cors'

import { productsRouter } from '../routes/products.routes.js'
import { cartRouter } from '../routes/cart.routes.js'
import { seedRouter } from '../routes/seed.routes.js'

import { dbConnection } from '../database/config.js'

export class Server {
  productPath = '/api/products'
  cartPath = '/api/cart'
  seedPath = '/api/seed'

  constructor() {
    this.app = express()
    this.port = process.env.PORT

    // conectar base de datos
    this.conectarDB()

    // Middlewares
    this.middlewares()

    this.routes()
  }

  async conectarDB() {
    await dbConnection()
  }

  middlewares() {
    // Política de CORS
    this.app.use(cors())

    // Lectura y parseo del body a JSON
    this.app.use(express.json())

    this.app.use(express.static('public'))
  }

  routes() {
    this.app.use(this.productPath, productsRouter)
    this.app.use(this.cartPath, cartRouter)
    this.app.use(this.seedPath, seedRouter)
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en puerto ${this.port}`)
    })
  }
}
