/*
  Warnings:

  - The primary key for the `Associate` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Associate" DROP CONSTRAINT "Associate_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Associate_pkey" PRIMARY KEY ("id");
