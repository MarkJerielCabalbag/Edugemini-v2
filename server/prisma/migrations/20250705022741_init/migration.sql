/*
  Warnings:

  - You are about to drop the column `status` on the `Output` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Files" ADD COLUMN     "status" "OutputStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Output" DROP COLUMN "status";
