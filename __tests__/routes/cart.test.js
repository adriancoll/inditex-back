import mongoose from 'mongoose'
import request from 'supertest'

import dotenv from 'dotenv'
dotenv.config()

import { Server } from '../../models/Server.js'
import { Product } from '../../models/product.entity.js'

const { app } = new Server()

describe('POST /api/cart', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI)
  })

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close()
  })

  it('should return new cart count', async () => {
    const firstProduct = await Product.findOne()

    const res = await request(app).post('/api/cart').send({
      id: firstProduct._id,
      colorCode: 0,
      storageCode: 0
    })

    expect(res.statusCode).toBe(200)
    expect(res.body.message).toBe(`${firstProduct.model}, añadido al carrito.`)
    expect(res.body.results.count).toBe(1)
  })

  it('Should fail if no data provided', async () => {
    const res = await request(app).post('/api/cart')

    expect(res.status).toBe(401)
  })
})
