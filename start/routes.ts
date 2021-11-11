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
    hello: 'Selamat datang di Web Api Saut Manurung',
    API_Provinsi: 'Silahkan akses api nya pada  :/public/api/provinsi',
    API_kabupaten: 'Silahkan akses api nya pada :/public/api/kabupaten',
    API_kecamatan: 'Silahkan akses api nya pada :/public/api/kecamatan',
  }
})
  
Route.group(() => {
  Route.post('users', 'UsersController.store')
  Route.get('users', 'UsersController.index')
  Route.get('users/:id', 'UsersController.show')
  Route.put('users/:id', 'UsersController.update')
  Route.delete('users/:id', 'UsersController.destroy')
}).prefix('/api/v1')

Route.group(() => {
  Route.get('provinsi', 'ProvinsisController.index')
  Route.get('provinsi/:id', 'ProvinsisController.show')
}).prefix('/public/api')

Route.group(() => {
  Route.post('provinsi', 'ProvinsisController.store')
  Route.put('provinsi/:id', 'ProvinsisController.update')
  Route.delete('provinsi/:id', 'ProvinsisController.destroy')
}).prefix('/api/v1')

Route.group(() => {
  Route.get('kabupaten', 'KabupatensController.index')
  Route.get('kabupaten/:id', 'KabupatensController.show')
}).prefix('/public/api')

Route.group(() => {
  Route.post('kabupaten', 'KabupatensController.store')
  Route.put('kabupaten/:id', 'KabupatensController.update')
  Route.delete('kabupaten/:id', 'KabupatensController.destroy')
}).prefix('/api/v1')