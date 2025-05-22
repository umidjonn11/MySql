import { Injectable } from '@nestjs/common';
import { CreateOrderInput } from './dto/create-order.input';
import { UpdateOrderInput } from './dto/update-order.input';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdersEntity } from './entities/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity) private orderRepo: Repository<OrdersEntity>,
  ) {}
  async create(createOrderInput: CreateOrderInput) {
    const order = this.orderRepo.create(createOrderInput);
    return await this.orderRepo.save(order);
  }

  findAll() {
    return this.orderRepo.find();
  }

  findOne(id: number) {
    const order = this.orderRepo.findOne({ where: { id } });
    return order;
  }

  async update(id: number, updateOrderInput: UpdateOrderInput) {
    const order = await this.orderRepo.findOne({ where: { id } });

    if (!order) {
      throw new Error(`Todo with ID ${id} not found`);
    }

    Object.assign(order, updateOrderInput);
    await this.orderRepo.save(order);
    return order;
  }

  remove(id: number) {
    return this.orderRepo.delete(id);
  }
}
