/*
  Warnings:

  - You are about to drop the column `name` on the `Vender` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[title]` on the table `Vender` will be added. If there are existing duplicate values, this will fail.
  - Made the column `title` on table `Vender` required. This step will fail if there are existing NULL values in that column.

*/
-- DropIndex
DROP INDEX `Vender_name_key` ON `Vender`;

-- AlterTable
ALTER TABLE `Vender` DROP COLUMN `name`,
    MODIFY `title` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Vender_title_key` ON `Vender`(`title`);
