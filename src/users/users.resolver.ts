import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { Roles } from 'src/security/roles.decorator';
import { RolesGuard } from 'src/security/roles-guard';
import { UserRole } from 'src/security/roles.enum';
import {  LoginInput } from './dto/login-user.input';
import { LoginResponse } from './dto/response-login';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  @Roles(UserRole.ADMIN)
  @UseGuards(RolesGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Mutation(() => LoginResponse)
loginUser(@Args('loginUserInput') loginUserInput:LoginInput ) {
  return this.usersService.login(loginUserInput);
}

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.updateUser(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.remove(id);
  }
}
