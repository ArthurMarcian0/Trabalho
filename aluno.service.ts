import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/PrismaService';
import { AlunoDTO } from './aluno.dto';

@Injectable()
export class AlunoService {
    constructor(private prisma: PrismaService) {}
    async create(data: AlunoDTO) {
        const studentExists = await this.prisma.aluno.findFirst({
            where: {
                id_aluno: data.id_aluno,
            },
        });
        if (studentExists) {
            throw new Error('Student already exists');
        }
        const user = await this.prisma.aluno.create({
            data,
        });
        return user;
    }
    async findAll(){
        return this.prisma.aluno.findMany();
    }

    async update(id_aluno: string, data: AlunoDTO) {
        const studentExists = await this.prisma.aluno.findUnique({
            where: {
                id_aluno,
            },
        });

        if (!studentExists) {
            throw new Error('Student does not exists!');
        }

        return await this.prisma.aluno.update({
            data,
            where: {
                id_aluno,
            },
        });
    }
    async delete(id_aluno: string) {
        const studentExists = await this.prisma.aluno.findUnique({
            where: {
                id_aluno,
            },
        });
        if (!studentExists){
            throw new Error('Student does not exists!');
        }
        return await this.prisma.aluno.delete({
            where: {
                id_aluno,
            },
        });
    }
}
