/*
  Warnings:

  - Made the column `content` on table `BlogPost` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `BlogPost` MODIFY `content` VARCHAR(191) NOT NULL;
