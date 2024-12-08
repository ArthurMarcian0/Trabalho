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
exports.CursoService = void 0;
const common_1 = require("@nestjs/common");
const PrismaService_1 = require("../../database/PrismaService");
let CursoService = class CursoService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(data) {
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
    async findAll() {
        return this.prisma.curso.findMany();
    }
    async update(curso_id, data) {
        const courseExists = await this.prisma.curso.findUnique({
            where: {
                curso_id,
            },
        });
        if (!courseExists) {
            throw new Error('Course does not exists!');
        }
        return await this.prisma.curso.update({
            data,
            where: {
                curso_id,
            },
        });
    }
    async delete(curso_id) {
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
};
exports.CursoService = CursoService;
exports.CursoService = CursoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [PrismaService_1.PrismaService])
], CursoService);
//# sourceMappingURL=curso.service.js.map