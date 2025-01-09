-- RenameIndex
ALTER TABLE `Asset` RENAME INDEX `Asset_assetNumber_key` TO `unique_assetNumber`;

-- RenameIndex
ALTER TABLE `Asset` RENAME INDEX `Asset_serialNumber_key` TO `unique_serialNumber`;
