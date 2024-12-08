-- CreateTable
CREATE TABLE "curso" (
    "curso_id" TEXT NOT NULL PRIMARY KEY,
    "titulo" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "duracao" TEXT NOT NULL,
    "intrutor" TEXT NOT NULL,
    "preco" REAL NOT NULL,
    "nivel" REAL NOT NULL
);

-- CreateTable
CREATE TABLE "aluno" (
    "id_aluno" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" REAL NOT NULL,
    "data_matricula" DATETIME NOT NULL,
    "curso_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "curso_titulo_key" ON "curso"("titulo");

-- CreateIndex
CREATE UNIQUE INDEX "curso_descricao_key" ON "curso"("descricao");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_email_key" ON "aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "aluno_telefone_key" ON "aluno"("telefone");
