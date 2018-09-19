'use strict'
// const config = require('config')

import router from 'koa-router'

/* controllers */
import user from '../controllers/user'

const api = router()
  .get('/api/user/list', user.list)
  .post('/api/user/login', user.login)
  .post('/api/user/logout', user.logout)
  .post('/api/user/register', user.register)
  .post('/api/user/search', user.search)

export default {
  api
}