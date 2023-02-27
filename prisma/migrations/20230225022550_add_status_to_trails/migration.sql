/*
  Warnings:

  - Added the required column `update_At` to the `Enrollment` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TrailStatus" AS ENUM ('ACTIVE', 'INACTIVE');

-- AlterTable
ALTER TABLE "Enrollment" ADD COLUMN     "created_At" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "update_At" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "trails" ADD COLUMN     "status" "TrailStatus" NOT NULL DEFAULT 'ACTIVE';
