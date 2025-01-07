/*
  Warnings:

  - Made the column `locationId` on table `Asset` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `Asset` DROP FOREIGN KEY `Asset_locationId_fkey`;

-- DropIndex
DROP INDEX `Asset_locationId_fkey` ON `Asset`;

-- AlterTable
ALTER TABLE `Asset` MODIFY `locationId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Asset` ADD CONSTRAINT `Asset_locationId_fkey` FOREIGN KEY (`locationId`) REFERENCES `Location`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
