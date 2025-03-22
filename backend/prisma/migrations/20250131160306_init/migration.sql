/*
  Warnings:

  - The values [ACCEPT] on the enum `RegistrationStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "RegistrationStatus_new" AS ENUM ('APPROVED', 'PENDING', 'REJECT');
ALTER TABLE "registration" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "registration" ALTER COLUMN "status" TYPE "RegistrationStatus_new" USING ("status"::text::"RegistrationStatus_new");
ALTER TYPE "RegistrationStatus" RENAME TO "RegistrationStatus_old";
ALTER TYPE "RegistrationStatus_new" RENAME TO "RegistrationStatus";
DROP TYPE "RegistrationStatus_old";
ALTER TABLE "registration" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;
