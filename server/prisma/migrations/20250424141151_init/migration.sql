-- DropForeignKey
ALTER TABLE "Announcement" DROP CONSTRAINT "Announcement_roomId_fkey";

-- DropForeignKey
ALTER TABLE "Classroom" DROP CONSTRAINT "Classroom_userId_fkey";

-- AddForeignKey
ALTER TABLE "Classroom" ADD CONSTRAINT "Classroom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Announcement" ADD CONSTRAINT "Announcement_roomId_fkey" FOREIGN KEY ("roomId") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;
