import { Controller, Get, Post, Delete, Body, Param, Request, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(@Request() req: any) {
    const userId = req.user?.sub;
    return this.todosService.findAll(userId);
  }

  @Post()
  create(@Request() req: any, @Body('text') text: string) {
    const userId = req.user?.sub;
    return this.todosService.create(text, userId);
  }

  @Delete(':id')
  remove(@Request() req: any, @Param('id') id: string) {
    const userId = req.user?.sub;
    return this.todosService.remove(id, userId);
  }
}
