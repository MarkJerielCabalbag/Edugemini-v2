-- AlterEnum
ALTER TYPE "OutputStatus" ADD VALUE 'LATE';

-- AlterTable
ALTER TABLE "Files" ADD COLUMN     "publicFileUrl" TEXT;
