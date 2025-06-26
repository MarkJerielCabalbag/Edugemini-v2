/*
  Warnings:

  - A unique constraint covering the columns `[roomId,activityId,studentId]` on the table `Output` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Output_roomId_activityId_studentId_key" ON "Output"("roomId", "activityId", "studentId");
