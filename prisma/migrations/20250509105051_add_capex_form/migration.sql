-- CreateTable
CREATE TABLE `CapexForm` (
    `id` VARCHAR(191) NOT NULL,
    `documentId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `unit` VARCHAR(191) NOT NULL,
    `location` VARCHAR(191) NOT NULL,
    `projectManager` VARCHAR(191) NOT NULL,
    `projectHead` VARCHAR(191) NOT NULL,
    `requestDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `priority` VARCHAR(191) NOT NULL,
    `budgetType` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `projectStart` DATETIME(3) NOT NULL,
    `projectEnd` DATETIME(3) NOT NULL,
    `oldAssets` TEXT NOT NULL,
    `technicalSuitability` TEXT NOT NULL,
    `compliance` TEXT NOT NULL,
    `implications` TEXT NOT NULL,
    `costTable` JSON NOT NULL,
    `economicViability` TEXT NOT NULL,
    `spendingPlan` JSON NOT NULL,
    `additionalComments` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `CapexForm_documentId_key`(`documentId`),
    INDEX `CapexForm_documentId_idx`(`documentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CapexForm` ADD CONSTRAINT `CapexForm_documentId_fkey` FOREIGN KEY (`documentId`) REFERENCES `Document`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
