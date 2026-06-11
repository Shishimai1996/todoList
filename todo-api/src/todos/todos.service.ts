import { Injectable } from '@nestjs/common';
import { Todo } from './todo.type';
import { TodoRepository } from './todo.repository';

@Injectable()
export class TodosService {
  constructor(private readonly repo: TodoRepository) {}

  async findAll(userId: string): Promise<Todo[]> {
    return this.repo.findAll(userId);
  }

  async create(text: string, userId: string): Promise<Todo> {
    return this.repo.create(text, userId);
  }

  async remove(id: string, userId: string): Promise<void> {
    return this.repo.remove(id, userId);
  }
}
