import { Request, Response } from 'express'
import { ProductsService } from '../services/ProductsService'

class ProductsController {
  async find(req: Request, res: Response) {
    const productsService = new ProductsService()
    const products = await productsService.find()
    return res.json(products)
  }

  async create(req: Request, res: Response) {
    const { name, description, price, quantity } = req.body

    const productsService = new ProductsService()
    const product = await productsService.create({
      name,
      description,
      price,
      quantity
    })
    return res.json(product)
  }

  async update(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const { name, description, price, quantity } = req.body
    const currentProduct = {
      name,
      description,
      price,
      quantity
    }

    const productsService = new ProductsService()
    const product = await productsService.update(id, currentProduct)

    return res.json(product)
  }

  async delete(req: Request, res: Response) {
    const id = parseInt(req.params.id)
    const productsService = new ProductsService()
    await productsService.delete(id)

    return res.json({ message: 'Produto deletado com sucesso' })
  }
}

export { ProductsController }
