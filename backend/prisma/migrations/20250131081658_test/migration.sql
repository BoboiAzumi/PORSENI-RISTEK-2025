/*
  Warnings:

  - Added the required column `idFormulir` to the `Peserta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Peserta" ADD COLUMN     "idFormulir" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Peserta" ADD CONSTRAINT "Peserta_idFormulir_fkey" FOREIGN KEY ("idFormulir") REFERENCES "Formulir"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
