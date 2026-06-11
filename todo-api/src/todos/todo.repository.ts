import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Todo } from './todo.type';

@Injectable()
export class TodoRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(userId: string): Promise<Todo[]> {
    const rows = await this.prisma.todo.findMany({ where: { userId } });
    return rows.map((r) => ({ id: r.id, text: r.text }));
  }

  async create(text: string, userId: string): Promise<Todo> {
    const created = await this.prisma.todo.create({ data: { text, userId } });
    return { id: created.id, text: created.text };
  }

  async remove(id: string, userId: string): Promise<void> {
    // ensure only owner can delete
    await this.prisma.todo.deleteMany({ where: { id, userId } });
  }
}
