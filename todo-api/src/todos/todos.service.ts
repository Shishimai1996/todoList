import { Injectable } from '@nestjs/common';
import { Todo } from './todo.type';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodosService {
  constructor(private readonly repo: TodoRepository) {}

  async findAll(): Promise<Todo[]> {
    return this.repo.findAll();
  }

  async create(text: string): Promise<Todo> {
    return this.repo.create(text);
  }

  async remove(id: string): Promise<void> {
    return this.repo.remove(id);
  }
}
