import express from 'express'
import config from 'config'

import routes from './routes'

import connect from './utils/connect'
import logger from './utils/logger'

const port = config.get<number>('port')

const app = express();

app.listen(port, () => {
  logger.info(`App is running at http://localhost:${port}`)

  connect()

  routes(app)
})