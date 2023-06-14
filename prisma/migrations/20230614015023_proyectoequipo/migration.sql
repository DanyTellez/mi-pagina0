/*
  Warnings:

  - The primary key for the `tipoplanta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `tipoplanta` table. All the data in the column will be lost.
  - Added the required column `id_planta` to the `TipoPlanta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tipoplanta` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `id_planta` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id_planta`);
