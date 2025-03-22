export function RegisterNow(){
    return (
        <div id="register" className="min-h-[30rem] flex justify-center px-10 p-[5rem] text-black">
            <div className="flex flex-col justify-center">
                <h4 className="text-3xl font-semibold w-full text-center">Daftarkan Kelas Anda Sekarang</h4>
                <div className="grid grid-flow-col gap-[5rem] my-6 py-10 w-full">
                    <img src="/img/register.png" alt="register" className="w-[20rem] rounded-md" />
                    <div className="min-w-[20rem] flex flex-col justify-center text-black">
                        <div className="p-4 rounded-md block">
                            <h3 className="text-2xl font-bold">Peserta Terbatas</h3>
                            <p className="mb-5 text-xs">*Periode pendaftaran 09 Januari 2025 - 15 Januari 2025</p>
                            <p className="my-5">Daftarkan segera melalui tombol berikut</p>
                            <a href="/register" className="bg-gradient-to-r from-[#e72747] to-[#f05e36] px-5 py-3 rounded-md text-lg w-[10rem] text-center hover:bg-[#e72747] transition duration-300 text-white">
                                Daftar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}