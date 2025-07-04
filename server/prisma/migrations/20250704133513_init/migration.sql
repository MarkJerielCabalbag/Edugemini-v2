-- CreateEnum
CREATE TYPE "OutputStatus" AS ENUM ('PENDING', 'ACCEPTED');

-- AlterTable
ALTER TABLE "Output" ADD COLUMN     "status" "OutputStatus" NOT NULL DEFAULT 'PENDING';
