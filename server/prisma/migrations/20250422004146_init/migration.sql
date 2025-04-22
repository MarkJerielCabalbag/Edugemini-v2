-- CreateTable
CREATE TABLE "Classroom" (
    "id" SERIAL NOT NULL,
    "classname" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "room" TEXT NOT NULL,
    "classcode" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Classroom_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Classroom" ADD CONSTRAINT "Classroom_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
