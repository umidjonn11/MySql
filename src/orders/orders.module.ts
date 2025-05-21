import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdersEntity } from './entities/order.entity';

@Module({
  imports:[TypeOrmModule.forFeature([OrdersEntity])],
  providers: [OrdersResolver, OrdersService],
})
export class OrdersModule {}
