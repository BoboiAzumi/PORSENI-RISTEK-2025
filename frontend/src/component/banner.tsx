export function Banner(){
    return (
        <div className="min-h-[100vh] flex justify-center px-10 pb-10 py-[5rem] text-white">
            <div className="p-10 flex flex-col justify-center items-center">
                <img src="/img/porseni.jpg" alt="Banner Image" className="rounded-md w-[30rem]" />
            </div>
            <div className="p-10 flex flex-col justify-center w-[60%] gap-6">
                <h2 className="text-5xl font-bold">Hai Semuanyaaa !</h2>
                <h4 className="text-xl">Porseni Ristek Telah Hadir Kembali !</h4>
                <a href="#about" className="bg-gradient-to-r from-[#e72747] to-[#f05e36] px-5 py-3 rounded-md text-lg w-[10rem] text-center hover:bg-[#e72747] transition duration-300">
                    Tentang
                </a>
            </div>
        </div>
    )
}