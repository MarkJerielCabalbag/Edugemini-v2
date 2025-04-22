-- CreateEnum
CREATE TYPE "ClassroomStatus" AS ENUM ('PENDING', 'DECLINED', 'APPROVED');

-- AlterTable
ALTER TABLE "Classroom" ADD COLUMN     "status" "ClassroomStatus" NOT NULL DEFAULT 'PENDING';
