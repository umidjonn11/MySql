import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksResolver } from './books.resolver';
import { BookEntity } from './entities/book.entity';
import { OrdersEntity } from 'src/orders/entities/order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([BookEntity])],
  providers: [BooksResolver, BooksService],
})
export class BooksModule {}
