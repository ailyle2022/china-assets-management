/*
  Warnings:

  - You are about to drop the column `purchaseOrderNumber` on the `PurchaseOrder` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[orderNumber]` on the table `PurchaseOrder` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `orderNumber` to the `PurchaseOrder` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `PurchaseOrder_purchaseOrderNumber_key` ON `PurchaseOrder`;

-- AlterTable
ALTER TABLE `PurchaseOrder` DROP COLUMN `purchaseOrderNumber`,
    ADD COLUMN `orderNumber` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `PurchaseOrder_orderNumber_key` ON `PurchaseOrder`(`orderNumber`);
