import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { OrdersEntity } from 'src/orders/entities/order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
