import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('increment')
  id: number

  @Column()
  name: string

  @Column()
  description: string

  @Column('decimal', { precision: 5, scale: 2 })
  price: number

  @Column()
  quantity: number
}

export { Product }
