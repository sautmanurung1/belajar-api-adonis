/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return {
    Sambutan: 'Selamat datang di Web Api Saut Manurung',
    API_Gombal: 'Dapat diakses di : /public/api/gombal',
    API_KataMotivasi : 'Dapat diakses di : Coming Soon'
  }
})
  
Route.group(() => {
  Route.get('gombal.json', 'GombalsController.index')
  Route.get('gombal/:id', 'GombalsController.show')
}).prefix('/public/api')

Route.group(() => {
  Route.post('gombal', 'GombalsController.store')
  Route.put('gombal/:id', 'GombalsController.update')
  Route.delete('gombal/:id', 'GombalsController.destroy')
}).prefix('/api/v1')

Route.group(() => {

}).prefix('/public/api')