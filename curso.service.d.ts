import { PrismaService } from 'src/database/PrismaService';
import { CursoDTO } from '../curso.dto';
export declare class CursoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CursoDTO): Promise<{
        curso_id: string;
        titulo: string;
        descricao: string;
        duracao: string;
        intrutor: string;
        preco: number;
        nivel: number;
    }>;
    findAll(): Promise<{
        curso_id: string;
        titulo: string;
        descricao: string;
        duracao: string;
        intrutor: string;
        preco: number;
        nivel: number;
    }[]>;
    update(curso_id: string, data: CursoDTO): Promise<{
        curso_id: string;
        titulo: string;
        descricao: string;
        duracao: string;
        intrutor: string;
        preco: number;
        nivel: number;
    }>;
    delete(curso_id: string): Promise<{
        curso_id: string;
        titulo: string;
        descricao: string;
        duracao: string;
        intrutor: string;
        preco: number;
        nivel: number;
    }>;
}
