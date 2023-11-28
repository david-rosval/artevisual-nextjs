-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nombrecompleto" TEXT NOT NULL,
    "dni" TEXT NOT NULL,
    "clave" TEXT NOT NULL,
    "pregunta" TEXT NOT NULL,
    "respuesta" TEXT NOT NULL,
    "estado" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_dni_key" ON "User"("dni");
