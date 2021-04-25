import { Router } from 'express'
import { ProductsController } from './controllers/ProductsController'

const routes = Router()

const productsController = new ProductsController()

routes.get('/products', productsController.find)
routes.post('/products', productsController.create)
routes.put('/products/:id', productsController.update)
routes.delete('/products/:id', productsController.delete)

export default routes
