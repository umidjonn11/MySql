// src/orders/dto/update-order.input.ts
import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class UpdateOrderInput {
  @Field(() => Int)
  id: number;

  @Field(() => Float, { nullable: true })
  price?: number;

  @Field(() => Int, { nullable: true })
  userId?: number;

  @Field(() => [Int], { nullable: true })
  bookIds?: number[];
}
