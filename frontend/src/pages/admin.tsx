import { useState } from 'react';
import { Sidebar } from '../component/sidebar';
import { Dashboard } from '../component/admin/dashboard';
import { NavbarAdmin } from '../component/admin/navbar';
import { RegistrationTable } from '../component/admin/registration-table';
import { ApprovedTable } from '../component/admin/approved-table';

const pageName = [
    "Dashboard",
    "Registration",
    "Approved",
    "Competition"
]

export function Admin() {
    const [page, setPage] = useState(0)

    return (
        <div className='flex'>
            <Sidebar page={page} setPage={setPage}/>
            <div className='w-[80%] min-h-[100vh] bg-[#f1f5f9]'>
                <NavbarAdmin name={pageName[page]}/>
                {page == 0 ? (<Dashboard />) : 
                page == 1 ? (<RegistrationTable />) : 
                page == 2 ? (<ApprovedTable />) : (<></>)}
            </div>
        </div>
    );
}
