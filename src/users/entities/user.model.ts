// src/users/models/user.model.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Order } from 'src/orders/entities/order.model';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true, description: 'User role like admin, customer, etc.' })
  role?: string;

  @Field(() => Date)
  created_at: Date;

//   @Field(() => [Order], { nullable: true })
//   orders?: Order[];
}
