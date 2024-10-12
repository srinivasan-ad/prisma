/*
  Warnings:

  - You are about to drop the column `content` on the `Post` table. All the data in the column will be lost.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Post" DROP COLUMN "content",
ALTER COLUMN "published" DROP DEFAULT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "name" SET NOT NULL;
