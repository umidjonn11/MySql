import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { OrdersModule } from './orders/orders.module';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { OrdersEntity } from './orders/entities/order.entity';
import { BookEntity } from './books/entities/book.entity';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    BooksModule,
    OrdersModule,
    UsersModule,
    TypeOrmModule.forRoot({
      host: 'localhost',
      port: 3306,
      username: 'root',
      type: 'mysql',
      password: 'osh123',
      database: 'umiddb',
      entities: [UserEntity, OrdersEntity, BookEntity],
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([UserEntity, OrdersEntity, BookEntity]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      graphiql: true,
      autoSchemaFile: './src/schema.gql',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
