/*
  Warnings:

  - Added the required column `nombre_Comun` to the `TipoPlanta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `precio` to the `TipoPlanta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `region` to the `TipoPlanta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tamanio` to the `TipoPlanta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tipoplanta` ADD COLUMN `nombre_Comun` VARCHAR(191) NOT NULL,
    ADD COLUMN `precio` INTEGER NOT NULL,
    ADD COLUMN `region` VARCHAR(191) NOT NULL,
    ADD COLUMN `tamanio` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(191) NOT NULL;
