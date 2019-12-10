var knex = require('../knex')

const mainRoutes = [
   {
      method: 'POST',
      path: '/',
      handler: (request, h) => {
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         const {code, click, gold, shop, guild, ironSword } = request.payload.data
         // Code will be UUID Generated
         const table = {
            code, click, gold, shop, guild, iron_sword: ironSword
         }
         const response = knex('save_table').insert(table)
         console.log(request.payload)
         return response
      }
   },
   {
      method: 'GET',
      path: '/save/{code}',
      handler: (request, h) => {
         console.log('Hitting', h.request.url.href, 'with', h.request.route.method, 'request')
         console.log(request.params.code)
         response = knex.select().where({code: request.params.code})
      }
   }

]

module.exports = mainRoutes