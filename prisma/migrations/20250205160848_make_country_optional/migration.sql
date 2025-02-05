/*
  Warnings:

  - You are about to drop the column `userId` on the `Drone` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Drone" DROP CONSTRAINT "Drone_locationId_fkey";

-- DropForeignKey
ALTER TABLE "Drone" DROP CONSTRAINT "Drone_userId_fkey";

-- AlterTable
ALTER TABLE "Drone" DROP COLUMN "userId",
ADD COLUMN     "ownerId" INTEGER,
ADD COLUMN     "status" TEXT NOT NULL DEFAULT 'active',
ADD COLUMN     "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "direction" SET DATA TYPE DOUBLE PRECISION,
ALTER COLUMN "signalStrength" SET DATA TYPE DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "Location" ADD COLUMN     "altitude" DOUBLE PRECISION,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "city" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- AddForeignKey
ALTER TABLE "Drone" ADD CONSTRAINT "Drone_locationId_fkey" FOREIGN KEY ("locationId") REFERENCES "Location"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Drone" ADD CONSTRAINT "Drone_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
