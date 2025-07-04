/*
  Warnings:

  - The values [ACCEPTED] on the enum `OutputStatus` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "OutputStatus_new" AS ENUM ('PENDING', 'SUBMITTED');
ALTER TABLE "Output" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Output" ALTER COLUMN "status" TYPE "OutputStatus_new" USING ("status"::text::"OutputStatus_new");
ALTER TYPE "OutputStatus" RENAME TO "OutputStatus_old";
ALTER TYPE "OutputStatus_new" RENAME TO "OutputStatus";
DROP TYPE "OutputStatus_old";
ALTER TABLE "Output" ALTER COLUMN "status" SET DEFAULT 'PENDING';
COMMIT;
