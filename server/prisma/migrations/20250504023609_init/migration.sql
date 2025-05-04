-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "roomId" INTEGER;

-- AddForeignKey
ALTER TABLE "Student" ADD CONSTRAINT "Student_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
