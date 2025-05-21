// src/orders/models/order.model.ts
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Book } from 'src/books/entities/book.model';
import { User } from 'src/users/entities/user.model';

@ObjectType()
export class Order {
  @Field(() => Int)
  id: number;

  @Field(() => Float)
  price: number;

  @Field(() => Date)
  created_at: Date;

  @Field(() => User)
  user: User;

  @Field(() => [Book])
  books: Book[];
}
