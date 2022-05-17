/*
  Warnings:

  - You are about to drop the column `date` on the `slots` table. All the data in the column will be lost.
  - Added the required column `time` to the `slots` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `slots` DROP COLUMN `date`,
    ADD COLUMN `time` VARCHAR(191) NOT NULL;
