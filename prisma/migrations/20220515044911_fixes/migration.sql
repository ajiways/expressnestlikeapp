/*
  Warnings:

  - You are about to drop the column `scheduleId` on the `appointments` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `appointments` DROP FOREIGN KEY `appointments_scheduleId_fkey`;

-- AlterTable
ALTER TABLE `appointments` DROP COLUMN `scheduleId`;

-- CreateTable
CREATE TABLE `slots` (
    `id` VARCHAR(191) NOT NULL,
    `scheduleId` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `slots` ADD CONSTRAINT `slots_scheduleId_fkey` FOREIGN KEY (`scheduleId`) REFERENCES `schedules`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
