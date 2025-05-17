-- AlterTable
ALTER TABLE "Output" ADD COLUMN     "activityId" INTEGER,
ADD COLUMN     "roomId" INTEGER;

-- AddForeignKey
ALTER TABLE "Output" ADD CONSTRAINT "Output_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Output" ADD CONSTRAINT "Output_activityId_fkey" FOREIGN KEY ("activityId") REFERENCES "Activity"("id") ON DELETE CASCADE ON UPDATE CASCADE;
