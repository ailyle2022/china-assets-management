/*
  Warnings:

  - You are about to drop the column `title` on the `Vender` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Vender` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `Vender_title_key` ON `Vender`;

-- AlterTable
ALTER TABLE `Vender` DROP COLUMN `title`,
    ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT 'Default';

-- CreateIndex
CREATE UNIQUE INDEX `Vender_name_key` ON `Vender`(`name`);
