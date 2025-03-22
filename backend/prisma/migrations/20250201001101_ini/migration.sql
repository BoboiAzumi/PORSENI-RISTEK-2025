/*
  Warnings:

  - Added the required column `email` to the `registration` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "registration" ADD COLUMN     "email" TEXT NOT NULL;
