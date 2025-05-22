import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { OrdersEntity } from 'src/orders/entities/order.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    JwtModule.register({
      secret: process.env.JWT_SECRET ?? 'secret',
      global: true,
      signOptions: { expiresIn: '30m' },
    }),
  ],
  providers: [UsersResolver, UsersService],
})
export class UsersModule {}
