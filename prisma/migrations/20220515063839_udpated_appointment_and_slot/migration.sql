/*
  Warnings:

  - A unique constraint covering the columns `[slotId]` on the table `appointments` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slotId` to the `appointments` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `appointments` ADD COLUMN `slotId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `appointments_slotId_key` ON `appointments`(`slotId`);

-- AddForeignKey
ALTER TABLE `appointments` ADD CONSTRAINT `appointments_slotId_fkey` FOREIGN KEY (`slotId`) REFERENCES `slots`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
