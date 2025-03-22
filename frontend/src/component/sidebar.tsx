import { CiCircleCheck, CiGrid41, CiLogout, CiServer } from 'react-icons/ci';

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export function Sidebar({page, setPage}: {page: number, setPage: Function}) {
    function Logout() {
        localStorage.removeItem('token');
        document.location.href = '/admin';
    }
    return (
        <div className='w-[20%] bg-[#1c2434] min-h-[100vh] text-white p-5'>
            <h1 className='text-2xl text-center mt-7'>Porseni</h1>
            <h5 className='text-[#7f8c9f] mt-15'>Menu</h5>
            <a
                className={`py-1 px-4 cursor-pointer flex items-center gap-5 rounded-sm mt-2 mb-5 text-[#dee4ee] text-lg hover:bg-[#333a48] ${page == 0 ? "bg-[#333a48]" : ""}`}
                onClick={() => setPage(0)}
            >
                <CiGrid41 size={20} />
                Dashboard
            </a>
            <a
                className={`py-1 px-4 cursor-pointer flex items-center gap-5 rounded-sm mt-2 mb-5 text-[#dee4ee] text-lg hover:bg-[#333a48] ${page == 1 ? "bg-[#333a48]" : ""}`}
                onClick={() => setPage(1)}
            >
                <CiServer size={20} />
                Registration
            </a>
            <a
                className={`py-1 px-4 cursor-pointer flex items-center gap-5 rounded-sm mt-2 mb-5 text-[#dee4ee] text-lg hover:bg-[#333a48] ${page == 2 ? "bg-[#333a48]" : ""}`}
                onClick={() => setPage(2)}
            >
                <CiCircleCheck size={20} />
                Approved
            </a>
            {/*
            <a
                className={`py-1 px-4 cursor-pointer flex items-center gap-5 rounded-sm mt-2 mb-5 text-[#dee4ee] text-lg hover:bg-[#333a48] ${page == 3 ? "bg-[#333a48]" : ""}`}
                onClick={() => setPage(3)}
            >
                <CiMedal />
                Competition
            </a>
             */}
            
            <a
                onClick={() => Logout()}
                className={`py-1 px-4 cursor-pointer flex items-center gap-5 rounded-sm mt-2 mb-5 text-[#dee4ee] text-lg hover:bg-[#333a48]`}
            >
                <CiLogout size={20} />
                Logout
            </a>
        </div>
    );
}
