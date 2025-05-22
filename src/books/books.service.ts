import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookEntity } from './entities/book.entity';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(BookEntity) private bookRepo: Repository<BookEntity>,
  ) {}
  async create(createOrderInput: CreateBookInput) {
    const book = this.bookRepo.create(createOrderInput);
    return await this.bookRepo.save(book);
  }

  findAll() {
    return this.bookRepo.find();
  }

  findOne(id: number) {
    const book = this.bookRepo.findOne({ where: { id } });
    return book;
  }

  async update(id: number, updateOrderInput: UpdateBookInput) {
    const book = await this.bookRepo.findOne({ where: { id } });

    if (!book) {
      throw new Error(`Todo with ID ${id} not found`);
    }

    Object.assign(book, updateOrderInput);
    await this.bookRepo.save(book);
    return book;
  }

  remove(id: number) {
    return this.bookRepo.delete(id);
  }
}
