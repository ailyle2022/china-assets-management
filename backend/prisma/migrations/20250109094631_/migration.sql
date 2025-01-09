/*
  Warnings:

  - A unique constraint covering the columns `[serialNumber]` on the table `Asset` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[assetNumber]` on the table `Asset` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Asset_serialNumber_key` ON `Asset`(`serialNumber`);

-- CreateIndex
CREATE UNIQUE INDEX `Asset_assetNumber_key` ON `Asset`(`assetNumber`);
