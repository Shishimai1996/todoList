import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Post()
  create(@Body('text') text: string) {
    return this.todosService.create(text);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.todosService.remove(id);
  }
}
