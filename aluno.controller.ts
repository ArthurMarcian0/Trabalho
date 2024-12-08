import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { AlunoService } from './aluno.service';
import { AlunoDTO } from './aluno.dto';

@Controller('aluno')
export class AlunoController {
  constructor(private readonly alunoService: AlunoService) {}
  @Post()
  async create(@Body() data: AlunoDTO) {
    return this.alunoService.create(data);
    }
  
    @Get()
    async findAll(){
      return this.alunoService.findAll();
    }
    @Put(':id')
    async update(@Param('id')id_aluno: string, @Body() data: AlunoDTO) {
      return this.alunoService.update(id_aluno, data);
    }
    @Delete(':id')
    async delete(@Param('id') id_aluno: string){
      return this.alunoService.delete(id_aluno)
    }
  }
  
