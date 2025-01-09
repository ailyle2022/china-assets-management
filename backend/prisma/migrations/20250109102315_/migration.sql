/*
  Warnings:

  - Made the column `assetNumber` on table `Asset` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Asset_serialNumber_key` ON `Asset`;

-- AlterTable
ALTER TABLE `Asset` MODIFY `assetNumber` VARCHAR(191) NOT NULL;
