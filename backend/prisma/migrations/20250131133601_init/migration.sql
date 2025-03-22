/*
  Warnings:

  - You are about to drop the column `biaya_lomba` on the `acara_perlombaan` table. All the data in the column will be lost.
  - You are about to drop the column `mata_lomba` on the `acara_perlombaan` table. All the data in the column will be lost.
  - You are about to drop the `Formulir` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Peserta` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cost` to the `acara_perlombaan` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Peserta" DROP CONSTRAINT "Peserta_idFormulir_fkey";

-- DropForeignKey
ALTER TABLE "Peserta" DROP CONSTRAINT "Peserta_mataLomba_fkey";

-- AlterTable
ALTER TABLE "acara_perlombaan" DROP COLUMN "biaya_lomba",
DROP COLUMN "mata_lomba",
ADD COLUMN     "cost" INTEGER NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL DEFAULT '';

-- DropTable
DROP TABLE "Formulir";

-- DropTable
DROP TABLE "Peserta";

-- CreateTable
CREATE TABLE "Registration" (
    "id" SERIAL NOT NULL,
    "classroom" TEXT NOT NULL,
    "class_leader" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Registration_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Participant" (
    "id" SERIAL NOT NULL,
    "registration_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "nim" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "competition_id" INTEGER NOT NULL,

    CONSTRAINT "Participant_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_competition_id_fkey" FOREIGN KEY ("competition_id") REFERENCES "acara_perlombaan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Participant" ADD CONSTRAINT "Participant_registration_id_fkey" FOREIGN KEY ("registration_id") REFERENCES "Registration"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
