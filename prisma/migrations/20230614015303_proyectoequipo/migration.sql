/*
  Warnings:

  - The primary key for the `tipoplanta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_planta` on the `tipoplanta` table. All the data in the column will be lost.
  - You are about to drop the column `nombre` on the `tipoplanta` table. All the data in the column will be lost.
  - Added the required column `id_Planta` to the `TipoPlanta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nombre_Cientifico` to the `TipoPlanta` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tipoplanta` DROP PRIMARY KEY,
    DROP COLUMN `id_planta`,
    DROP COLUMN `nombre`,
    ADD COLUMN `id_Planta` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `nombre_Cientifico` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_Planta`);
