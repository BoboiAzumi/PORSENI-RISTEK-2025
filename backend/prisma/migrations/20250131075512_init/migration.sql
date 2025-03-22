/*
  Warnings:

  - Added the required column `nim` to the `Formulir` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Formulir" ADD COLUMN     "nim" TEXT NOT NULL;
