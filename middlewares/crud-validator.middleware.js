import { request, response } from 'express'
import { validationResult } from 'express-validator'
import responses from '../helpers/api-responses.js'

export const crudValidator = (req = request, res = response, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(401).json(responses.error(null, res.statusCode, errors))
  }

  // Si no hay errores pasamos al siguiente Middleware
  next()
}
