/*
  Warnings:

  - You are about to drop the column `location` on the `Asset` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Asset` DROP COLUMN `location`,
    ADD COLUMN `locationId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Asset` ADD CONSTRAINT `Asset_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
