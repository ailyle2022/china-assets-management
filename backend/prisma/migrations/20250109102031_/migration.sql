-- RenameIndex
ALTER TABLE `Asset` RENAME INDEX `unique_assetNumber` TO `Asset_assetNumber_key`;

-- RenameIndex
ALTER TABLE `Asset` RENAME INDEX `unique_serialNumber` TO `Asset_serialNumber_key`;
