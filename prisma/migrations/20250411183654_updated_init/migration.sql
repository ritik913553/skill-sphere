/*
  Warnings:

  - You are about to drop the column `githuLink` on the `Project` table. All the data in the column will be lost.
  - You are about to drop the column `mentorProfileId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `postId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profileId` on the `User` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `MentorProfile` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId]` on the table `Profile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `Profile` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Profile" DROP CONSTRAINT "Profile_projectId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_mentorProfileId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_postId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_profileId_fkey";

-- AlterTable
ALTER TABLE "MentorProfile" ADD COLUMN     "userId" TEXT;

-- AlterTable
ALTER TABLE "Profile" ADD COLUMN     "userId" TEXT NOT NULL,
ALTER COLUMN "image" DROP NOT NULL,
ALTER COLUMN "projectId" DROP NOT NULL,
ALTER COLUMN "skills" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "experience" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "interest" SET DEFAULT ARRAY[]::TEXT[],
ALTER COLUMN "isMentor" SET DEFAULT false;

-- AlterTable
ALTER TABLE "Project" DROP COLUMN "githuLink",
ADD COLUMN     "githubLink" TEXT;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "mentorProfileId",
DROP COLUMN "postId",
DROP COLUMN "profileId";

-- CreateTable
CREATE TABLE "_PostToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_PostToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_PostToUser_B_index" ON "_PostToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "MentorProfile_userId_key" ON "MentorProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MentorProfile" ADD CONSTRAINT "MentorProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToUser" ADD CONSTRAINT "_PostToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Post"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PostToUser" ADD CONSTRAINT "_PostToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
