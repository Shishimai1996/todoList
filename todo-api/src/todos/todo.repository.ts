import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Todo } from './todo.type';

@Injectable()
export class TodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<Todo[]> {
    const rows = await this.prisma.todo.findMany();
    return rows.map((r) => ({ id: r.id, text: r.text }));
  }

  async create(text: string): Promise<Todo> {
    const created = await this.prisma.todo.create({ data: { text } });
    return { id: created.id, text: created.text };
  }

  async remove(id: string): Promise<void> {
    await this.prisma.todo.delete({ where: { id } });
  }
}
