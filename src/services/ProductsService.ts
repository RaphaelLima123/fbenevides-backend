import { getCustomRepository } from 'typeorm'
import { ProductsRepository } from '../repositories/ProductsRepository'

interface IProductsCreate {
  name: string
  description: string
  price: number
  quantity: number
}

class ProductsService {
  async find() {
    const productsRepository = getCustomRepository(ProductsRepository)
    const products = await productsRepository.find()
    return products
  }

  async create({ name, description, price, quantity }: IProductsCreate) {
    const productsRepository = getCustomRepository(ProductsRepository)
    const product = productsRepository.create({
      name,
      description,
      price,
      quantity
    })

    await productsRepository.save(product)
    return product
  }

  async update(id: number, currentProduct: Object) {
    const productsRepository = getCustomRepository(ProductsRepository)

    const findProduct = await productsRepository.findOne(id)

    const product = Object.assign(findProduct, currentProduct)

    await productsRepository.save(product)

    return product
  }

  async delete(id: number) {
    const productsRepository = getCustomRepository(ProductsRepository)
    const product = await productsRepository.findOne(id)
    await productsRepository.delete(product)
  }
}

export { ProductsService }
