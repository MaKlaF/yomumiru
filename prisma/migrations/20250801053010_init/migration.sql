-- CreateTable
CREATE TABLE "public"."User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Post" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Comment" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "postId" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Status" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Status_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MangaSeries" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "illustrator" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "MangaSeries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."MangaVolume" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "pubDate" TIMESTAMP(3) NOT NULL,
    "seriesId" INTEGER NOT NULL,

    CONSTRAINT "MangaVolume_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AnimeSeries" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "illustrator" TEXT NOT NULL,
    "statusId" INTEGER NOT NULL,

    CONSTRAINT "AnimeSeries_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."AnimeSeason" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "year" TIMESTAMP(3) NOT NULL,
    "seriesId" INTEGER NOT NULL,

    CONSTRAINT "AnimeSeason_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "public"."User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Status_name_key" ON "public"."Status"("name");

-- AddForeignKey
ALTER TABLE "public"."Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Comment" ADD CONSTRAINT "Comment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MangaSeries" ADD CONSTRAINT "MangaSeries_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "public"."Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."MangaVolume" ADD CONSTRAINT "MangaVolume_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "public"."MangaSeries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnimeSeries" ADD CONSTRAINT "AnimeSeries_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "public"."Status"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."AnimeSeason" ADD CONSTRAINT "AnimeSeason_seriesId_fkey" FOREIGN KEY ("seriesId") REFERENCES "public"."AnimeSeries"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
