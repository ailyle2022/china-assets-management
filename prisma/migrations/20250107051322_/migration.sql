/*
  Warnings:

  - You are about to drop the column `purchaseOrderNumberId` on the `Asset` table. All the data in the column will be lost.
  - Added the required column `purchaseOrderId` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Asset` DROP FOREIGN KEY `Asset_purchaseOrderNumberId_fkey`;

-- DropIndex
DROP INDEX `Asset_purchaseOrderNumberId_fkey` ON `Asset`;

-- AlterTable
ALTER TABLE `Asset` DROP COLUMN `purchaseOrderNumberId`,
    ADD COLUMN `purchaseOrderId` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `Asset` ADD CONSTRAINT `Asset_purchaseOrderId_fkey` FOREIGN KEY (`purchaseOrderId`) REFERENCES `PurchaseOrder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
