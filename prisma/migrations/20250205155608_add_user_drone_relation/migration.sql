/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Drone` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Drone` table. All the data in the column will be lost.
  - You are about to drop the column `timestamp` on the `Drone` table. All the data in the column will be lost.
  - You are about to alter the column `direction` on the `Drone` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `signalStrength` on the `Drone` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the column `altitude` on the `Location` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - Added the required column `userId` to the `Drone` table without a default value. This is not possible if the table is not empty.
  - Made the column `country` on table `Location` required. This step will fail if there are existing NULL values in that column.
  - Made the column `city` on table `Location` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Drone" DROP CONSTRAINT "Drone_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Drone" DROP CONSTRAINT "Drone_ownerId_fkey";

-- AlterTable
ALTER TABLE "Drone" DROP COLUMN "ownerId",
DROP COLUMN "status",
DROP COLUMN "timestamp",
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "direction" SET DATA TYPE INTEGER,
ALTER COLUMN "signalStrength" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Location" DROP COLUMN "altitude",
ALTER COLUMN "country" SET NOT NULL,
ALTER COLUMN "city" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- AddForeignKey
ALTER TABLE "Drone" ADD CONSTRAINT "Drone_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Drone" ADD CONSTRAINT "Drone_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
