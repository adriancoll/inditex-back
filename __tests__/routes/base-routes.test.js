import request from 'supertest'

import dotenv from 'dotenv'
dotenv.config()

import { Server } from '../../models/Server.js'

const { app } = new Server()

describe('GET /', () => {
  it('should render properly', async () => {
    await request(app).get('/').expect(200)
  })
})

describe('GET /404', () => {
  it('should return 404 for non-existent URLs', async () => {
    await request(app).get('/404').expect(404)
    await request(app).get('/notfound').expect(404)
  })
})
