import mongoose from 'mongoose'
import request from 'supertest'

import dotenv from 'dotenv'
dotenv.config()

import { Server } from '../../models/Server.js'
import { Product } from '../../models/product.entity.js'

const { app } = new Server()

describe('GET /api/products', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI)
  })

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close()
  })

  it('should return all products', async () => {
    const productNumber = await Product.countDocuments({})

    const res = await request(app).get('/api/products')
    expect(res.statusCode).toBe(200)
    expect(res.body.results.length).toBe(productNumber)
  })
})

describe('GET /api/products/:slug', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI)
  })

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close()
  })

  it('should return product', async () => {
    const product = await Product.findOne()
      .populate('specification', '-_id -__v')
      .lean()

    const res = await request(app).get(`/api/products/${product.slug}`)

    console.log(res.body.results.product.specification, product.specification)

    expect(res.statusCode).toBe(200)
    expect(JSON.stringify(res.body.results.product)).toBe(
      JSON.stringify(product)
    )
  })
})
