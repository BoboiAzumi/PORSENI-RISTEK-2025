/*
  Warnings:

  - Added the required column `kontak` to the `Peserta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nim` to the `Peserta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Peserta" ADD COLUMN     "kontak" TEXT NOT NULL,
ADD COLUMN     "nim" TEXT NOT NULL;
