export function About(){
    return (
        <div id="about" className="min-h-[30rem] flex justify-center px-10 p-[5rem] text-white">
            <div className="flex flex-col justify-center">
                <h4 className="text-3xl font-semibold w-full my-6 text-center text-black">About</h4>
                <div className="grid grid-flow-col gap-[10rem] py-10 w-full">
                    <div className="w-[20rem] flex flex-col justify-center gap-10">
                        <p className="text-lg font-semibold bg-gradient-to-br from-[#ec2649] to-[#f38928] p-4 rounded-md">
                            Porseni Ristek merupakan acara tahunan yang diselenggarakan oleh STIKOM Tunas Bangsa yang bertujuan untuk mengasah
                            keterampilan, ketangkasan, dan kreativitas mahasiswa STIKOM Tunas Bangsa. Acara ini diharapkan dapat mempererat silaturahmi
                            sesama mahasiswa STIKOM Tunas Bangsa
                        </p>
                    </div>
                    <img src="/img/bulu_tangkis.jpeg" alt="Bulu Tangkis" className="w-[20rem] rounded-md" />
                </div>
            </div>
        </div>
    )
}