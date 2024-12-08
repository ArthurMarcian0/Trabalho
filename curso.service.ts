import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { CursoDTO } from '../curso.dto';

@Injectable()
export class CursoService {
    constructor(private prisma: PrismaService){}
    async create(data: CursoDTO){
        const courseExists = await this.prisma.curso.findFirst({
            where: {
               titulo: data.titulo,
            },
        });
        if (courseExists) {
            throw new Error('Course already exists');
        }
        const course = await this.prisma.curso.create({
            data,
        });
        return course;
    }

    async findAll(){
        return this.prisma.curso.findMany();
    }

    async update(curso_id: string, data: CursoDTO) {
        const courseExists = await this.prisma.curso.findUnique({
            where:{
                curso_id,
            },
        });
        if (!courseExists){
            throw new Error('Course does not exists!');
        }

        return await this.prisma.curso.update({
            data,
            where: {
                curso_id,
            },
        });
    }
    async delete(curso_id: string){
        const courseExists = await this.prisma.curso.findUnique({
            where: {
                curso_id,
            },
        });
        if (!courseExists) {
            throw new Error('User does not exists!');
        }
        return await this.prisma.curso.delete({
            where: {
                curso_id,
            },
        });
    }
}
