export function Navbar(){
    return (
        <div className="flex fixed z-[10] justify-center w-full max-w-8xl bg-[#202344]">
            <div className="w-full flex justify-between items-center max-w-6xl px-8 text-[#fdfcfb] h-[4rem]">
                <div className="w-[50%]">
                    <a href="/" className="text-xl font-semibold">Porseni Ristek 2025</a>
                </div>
                <div className="w-[50%] flex gap-[3rem]">
                    <a href="#" className="text-md font-semibold hover:text-[#ec2e48] transition duration-300">Home</a>
                    <a href="#about" className="text-md font-semibold hover:text-[#ec2e48] transition duration-300">About</a>
                    <a href="#pertandingan" className="text-md font-semibold hover:text-[#ec2e48] transition duration-300">Pertandingan</a>
                    <a href="#register" className="text-md font-semibold hover:text-[#ec2e48] transition duration-300">Daftar</a>
                    <a href="#contact" className="text-md font-semibold hover:text-[#ec2e48] transition duration-300">Contact</a>
                    <a href="/admin" className="text-md font-semibold hover:text-[#ec2e48] transition duration-300">Login</a>
                </div>
            </div>
        </div>
    )
}