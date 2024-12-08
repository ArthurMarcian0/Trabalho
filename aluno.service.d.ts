import { PrismaService } from 'src/database/PrismaService';
import { AlunoDTO } from './aluno.dto';
export declare class AlunoService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: AlunoDTO): Promise<{
        id_aluno: string;
        nome: string;
        email: string;
        telefone: number;
        data_matricula: Date;
        curso_id: string;
    }>;
    findAll(): Promise<{
        id_aluno: string;
        nome: string;
        email: string;
        telefone: number;
        data_matricula: Date;
        curso_id: string;
    }[]>;
    update(id_aluno: string, data: AlunoDTO): Promise<{
        id_aluno: string;
        nome: string;
        email: string;
        telefone: number;
        data_matricula: Date;
        curso_id: string;
    }>;
    delete(id_aluno: string): Promise<{
        id_aluno: string;
        nome: string;
        email: string;
        telefone: number;
        data_matricula: Date;
        curso_id: string;
    }>;
}
