import { Module } from '@nestjs/common';
import { CursoModule } from './modules/curso/curso.module';
import { AlunoModule } from './modules/aluno/aluno.module';

@Module({
  imports: [CursoModule, AlunoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
