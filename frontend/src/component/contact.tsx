export function Contact() {
    return (
        <div id="contact" className='min-h-[30rem] flex justify-center px-10 p-[5rem] text-black'>
            <div className='flex flex-col justify-center'>
                <h4 className='text-3xl font-semibold w-full text-center'>
                    Hubungi Panitia
                </h4>
                <div className='grid grid-flow-col gap-[10rem] my-6 py-10 w-full'>
                    <div className="px-5 py-3 bg-[#e72747] text-white rounded-md flex w-full items-center cursor-pointer hover:bg-[#f58928] transition duration-300">
                        <img src="/img/person.png" alt="Person" width={80}/>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Ferri</h3>
                            <h3 className="text-md">0812-6217-0818</h3>
                        </div>
                    </div>
                    <div className="px-5 py-3 bg-[#e72747] text-white rounded-md flex w-full items-center cursor-pointer hover:bg-[#f58928] transition duration-300">
                        <img src="/img/person.png" alt="Person" width={80}/>
                        <div className="p-4">
                            <h3 className="text-lg font-semibold">Novi</h3>
                            <h3 className="text-md">0831-9945-6829</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
