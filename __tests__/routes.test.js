import mongoose from 'mongoose'
import request from 'supertest'

import dotenv from 'dotenv'
dotenv.config()

import { Server } from '../models/Server.js'

const { app } = new Server()

describe('GET /', () => {
  it('should render properly', async () => {
    await request(app).get('/').expect(200)
  })
})

describe('GET /api/products', () => {
  beforeEach(async () => {
    await mongoose.connect(process.env.MONGODB_URI)
  })

  /* Closing database connection after each test. */
  afterEach(async () => {
    await mongoose.connection.close()
  })

  it('should return all products', async () => {
    const res = await request(app).get('/api/products')
    expect(res.statusCode).toBe(200)
    expect(res.body.results.length).toBeGreaterThan(0)
  })
})

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(app).get('/404').expect(404)
    await request(app).get('/notfound').expect(404)
  })
})
