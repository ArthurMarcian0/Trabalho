"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../database/PrismaService");
let AlunoService = class AlunoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
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
    async findAll() {
        return this.prisma.aluno.findMany();
    }
    async update(id_aluno, data) {
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
    async delete(id_aluno) {
        const studentExists = await this.prisma.aluno.findUnique({
            where: {
                id_aluno,
            },
        });
        if (!studentExists) {
            throw new Error('Student does not exists!');
        }
        return await this.prisma.aluno.delete({
            where: {
                id_aluno,
            },
        });
    }
};
exports.AlunoService = AlunoService;
exports.AlunoService = AlunoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], AlunoService);
//# sourceMappingURL=aluno.service.js.map