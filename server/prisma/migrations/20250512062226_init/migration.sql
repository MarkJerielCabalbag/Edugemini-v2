-- DropIndex
DROP INDEX "Student_userId_key";

-- AlterTable
ALTER TABLE "Announcement" ALTER COLUMN "createdAt" SET DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Files" ADD COLUMN     "outputId" INTEGER;

-- CreateTable
CREATE TABLE "Output" (
    "id" SERIAL NOT NULL,
    "studentId" INTEGER,

    CONSTRAINT "Output_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Output" ADD CONSTRAINT "Output_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("userId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Files" ADD CONSTRAINT "Files_outputId_fkey" FOREIGN KEY ("outputId") REFERENCES "Output"("id") ON DELETE CASCADE ON UPDATE CASCADE;
