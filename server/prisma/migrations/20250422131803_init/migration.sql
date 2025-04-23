-- CreateTable
CREATE TABLE "Files" (
    "id" SERIAL NOT NULL,
    "filename" TEXT NOT NULL,
    "mimetype" TEXT NOT NULL,
    "fileSize" INTEGER NOT NULL,
    "announceId" INTEGER NOT NULL,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_announceId_fkey" FOREIGN KEY ("announceId") REFERENCES "Announcement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
