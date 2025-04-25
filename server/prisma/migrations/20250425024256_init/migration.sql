/*
  Warnings:

  - You are about to drop the column `destination` on the `Files` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Files" DROP COLUMN "destination",
ADD COLUMN     "filePath" TEXT,
ADD COLUMN     "folderPath" TEXT;
