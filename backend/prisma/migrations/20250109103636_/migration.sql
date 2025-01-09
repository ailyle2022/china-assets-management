/*
  Warnings:

  - Made the column `warrantyExpiry` on table `Asset` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Asset` MODIFY `warrantyExpiry` DATETIME(3) NOT NULL;
