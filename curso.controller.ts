import { Controller, Post, Body,Get, Put, Param, Delete } from '@nestjs/common';
import { CursoService } from './curso.service';
import { CursoDTO } from '../curso.dto';


@Controller('curso')
export class CursoController {
  constructor(private readonly cursoService: CursoService) {}

@Post()
async create(@Body() data: CursoDTO) {
  return this.cursoService.create(data);
  }

  @Get()
  async findAll(){
    return this.cursoService.findAll();
  }
  @Put(':id')
  async update(@Param('id')curso_id: string, @Body() data: CursoDTO) {
    return this.cursoService.update(curso_id, data);
  }
  @Delete(':id')
  async delete(@Param('id') curso_id: string){
    return this.cursoService.delete(curso_id)
  }
}
