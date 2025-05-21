// src/orders/dto/create-order.input.ts
import { InputType, Field, Float, Int } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => Float)
  price: number;

  @Field(() => Int)
  userId: number;

  @Field(() => [Int])
  bookIds: number[];
}
