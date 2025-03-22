/*
  Warnings:

  - Added the required column `type` to the `competition` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "CompetitionType" AS ENUM ('INDIVIDUAL', 'TEAM');

-- AlterTable
ALTER TABLE "competition" ADD COLUMN     "type" "CompetitionType" NOT NULL;
