// src/books/dto/create-book.input.ts
import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  author: string;

  @Field()
  description: string;

  @Field(() => Float)
  price: number;
}
