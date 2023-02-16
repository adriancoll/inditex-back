import { Router } from 'express'
import { seedDatabase } from '../controllers/seed.controller.js'

export const seedRouter = Router()

seedRouter.post('/', seedDatabase)
