-- CreateEnum
CREATE TYPE "RegistrationStatus" AS ENUM ('ACCEPT', 'PENDING', 'REJECT');

-- AlterTable
ALTER TABLE "registration" ADD COLUMN     "status" "RegistrationStatus" NOT NULL DEFAULT 'PENDING';
