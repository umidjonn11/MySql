// src/books/models/book.model.ts
import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.model';

@ObjectType()
export class Book {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  title: string;

  @Field(() => String)
  author: string;

  @Field(() => String)
  description: string;

  @Field(() => Float)
  price: number;

  @Field(() => Date)
  created_at: Date;

//   @Field(() => [Order], { nullable: true })
//   orders?: Order[];
}
