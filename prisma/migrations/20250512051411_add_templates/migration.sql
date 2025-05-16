/*
  Warnings:

  - You are about to drop the column `creatorId` on the `template` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `template` table. All the data in the column will be lost.
  - Added the required column `formData` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Template` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `Template` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `template` DROP FOREIGN KEY `Template_creatorId_fkey`;

-- DropIndex
DROP INDEX `Template_creatorId_fkey` ON `template`;

-- AlterTable
ALTER TABLE `template` DROP COLUMN `creatorId`,
    DROP COLUMN `description`,
    ADD COLUMN `formData` JSON NOT NULL,
    ADD COLUMN `type` VARCHAR(191) NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL,
    ADD COLUMN `userId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `Template_userId_idx` ON `Template`(`userId`);

-- AddForeignKey
ALTER TABLE `Template` ADD CONSTRAINT `Template_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
