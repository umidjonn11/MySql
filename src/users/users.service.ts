import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}
  async create(createUserInput: CreateUserInput) {
    const user = this.userRepo.create(createUserInput);
    return await this.userRepo.save(user);
  }

  findAll() {
    return this.userRepo.find();
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const user = await this.userRepo.findOne({ where: { id } });

    if (!user) {
      throw new Error(`Todo with ID ${id} not found`);
    }

    Object.assign(user, updateUserInput);
    await this.userRepo.save(user);
    return user;
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
