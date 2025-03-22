-- CreateTable
CREATE TABLE "acara_perlombaan" (
    "id" SERIAL NOT NULL,
    "mata_lomba" TEXT NOT NULL DEFAULT '',
    "biaya_lomba" INTEGER NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "acara_perlombaan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Formulir" (
    "id" SERIAL NOT NULL,
    "kelas" TEXT NOT NULL,
    "komting" TEXT NOT NULL,
    "contact" TEXT NOT NULL,

    CONSTRAINT "Formulir_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Peserta" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,
    "mataLomba" INTEGER NOT NULL,

    CONSTRAINT "Peserta_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Peserta" ADD CONSTRAINT "Peserta_mataLomba_fkey" FOREIGN KEY ("mataLomba") REFERENCES "acara_perlombaan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
