import { BookEntity } from 'src/books/entities/book.entity';
import { UserEntity } from 'src/users/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'orders' })
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  price: number;

  @CreateDateColumn()
  created_at: Date;

  @ManyToOne(() => UserEntity, user => user.orders, { onDelete: 'CASCADE' })
  user: UserEntity;

  @ManyToMany(() => BookEntity, book => book.orders)
  @JoinTable()
  books: BookEntity[];
}
