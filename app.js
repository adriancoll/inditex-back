import { Server } from './models/Server.js'

import dotenv from 'dotenv'
dotenv.config()

// Creamos la instancia de express y rutas...
const server = new Server()

// Server escuchando
server.listen()
