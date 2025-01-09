/*
  Warnings:

  - You are about to alter the column `warrantyExpiry` on the `Asset` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `DateTime(3)`.
  - Added the required column `purchaseDate` to the `Asset` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Asset` ADD COLUMN `purchaseDate` DATETIME(3) NOT NULL,
    MODIFY `warrantyExpiry` DATETIME(3) NULL;
