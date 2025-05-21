// src/books/dto/update-book.input.ts
import { InputType, Field, Int, Float } from '@nestjs/graphql';

@InputType()
export class UpdateBookInput {
  @Field(() => Int)
  id: number;

  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => String, { nullable: true })
  author?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Float, { nullable: true })
  price?: number;
}
