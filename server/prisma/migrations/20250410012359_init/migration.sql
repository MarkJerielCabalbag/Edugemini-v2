/*
  Warnings:

  - Added the required column `classworkId` to the `Files` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Files" ADD COLUMN     "classworkId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_classworkId_fkey" FOREIGN KEY ("classworkId") REFERENCES "Classwork"("id") ON DELETE CASCADE ON UPDATE CASCADE;
