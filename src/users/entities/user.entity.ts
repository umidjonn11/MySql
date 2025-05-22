import { hash } from 'bcrypt';
import { OrdersEntity } from 'src/orders/entities/order.entity';
import { UserRole } from 'src/security/roles.enum';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column()
  role: UserRole;
  @Column({ nullable: true, select: false })
  refreshToken: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(() => OrdersEntity, (order) => order.user)
  orders: OrdersEntity[];

  @BeforeInsert()
  async hash() {
    this.password = await hash(this.password, 12);
  }
}
