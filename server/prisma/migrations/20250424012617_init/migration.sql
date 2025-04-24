-- DropForeignKey
ALTER TABLE "Files" DROP CONSTRAINT "Files_announceId_fkey";

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_announceId_fkey" FOREIGN KEY ("announceId") REFERENCES "Announcement"("id") ON DELETE CASCADE ON UPDATE CASCADE;
