/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Drone` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Drone" DROP CONSTRAINT "Drone_ownerId_fkey";

-- AlterTable
ALTER TABLE "Drone" DROP COLUMN "ownerId";
