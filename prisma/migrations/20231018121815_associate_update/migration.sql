-- AlterTable
ALTER TABLE "Associate" ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "createdAt" DROP DEFAULT;
DROP SEQUENCE "Associate_id_seq";
