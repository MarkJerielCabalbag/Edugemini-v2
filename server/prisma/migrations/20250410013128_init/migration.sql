/*
  Warnings:

  - You are about to drop the column `studentId` on the `Classroom` table. All the data in the column will be lost.
  - Added the required column `classroomId` to the `Classwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `description` to the `Classwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dueDate` to the `Classwork` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Classwork` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Classroom" DROP CONSTRAINT "Classroom_studentId_fkey";

-- AlterTable
ALTER TABLE "Classroom" DROP COLUMN "studentId";

-- AlterTable
ALTER TABLE "Classwork" ADD COLUMN     "classroomId" INTEGER NOT NULL,
ADD COLUMN     "description" TEXT NOT NULL,
ADD COLUMN     "dueDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "_ClassroomToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ClassroomToStudent_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ClassroomToStudent_B_index" ON "_ClassroomToStudent"("B");

-- AddForeignKey
ALTER TABLE "Classwork" ADD CONSTRAINT "Classwork_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassroomToStudent" ADD CONSTRAINT "_ClassroomToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassroomToStudent" ADD CONSTRAINT "_ClassroomToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
