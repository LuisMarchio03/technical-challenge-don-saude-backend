/*
  Warnings:

  - Added the required column `category` to the `Associate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Associate" ADD COLUMN     "category" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "AssociateAddress" (
    "id" TEXT NOT NULL,
    "associate_id" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "complement" TEXT NOT NULL,
    "neighborhood" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AssociateAddress_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "AssociateAddress" ADD CONSTRAINT "AssociateAddress_associate_id_fkey" FOREIGN KEY ("associate_id") REFERENCES "Associate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
