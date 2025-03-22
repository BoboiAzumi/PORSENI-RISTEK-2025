
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Registration } from '../../types/admin';
import {
    CiRead,
} from 'react-icons/ci';
import { DetailRegistration } from '../../types/detail';

export function ApprovedTable() {
    const [pendingRegistration, setPendingRegistration] = useState(
        [] as Registration[]
    );
    const [detail, setDetail] = useState({} as DetailRegistration);
    const [selectedIndex, setSelectedIndex] = useState(-1);

    function fetchData() {
        fetch('http://localhost:1000/api/registration/approved')
            .then((res) => res.json())
            .then((json) => {
                if (json.status != 'ERROR') {
                    setPendingRegistration(json.data);
                }
            });
    }

    async function fetchDetail() {
        console.log(pendingRegistration[selectedIndex]);
        fetch(
            `http://localhost:1000/api/registration/${pendingRegistration[selectedIndex].id}`
        )
            .then((res) => res.json())
            .then((json) => {
                if (json.status != 'ERROR') {
                    setDetail(json.data);
                }
            });
    }
    
    useEffect(() => {
        if (selectedIndex == -1) {
            return;
        }

        fetchDetail();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selectedIndex]);

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <div className='px-5 py-6'>
                <div className='bg-white w-full p-5 shadow-sm rounded-md'>
                    {selectedIndex == -1 ? (
                        <table className='border-collapse border border-gray-400 w-full'>
                            <thead>
                                <tr>
                                    <th className='border border-gray-300 p-3'>
                                        Kelas
                                    </th>
                                    <th className='border border-gray-300 p-3'>
                                        Komting
                                    </th>
                                    <th className='border border-gray-300 p-3'>
                                        NIM Komting
                                    </th>
                                    <th className='border border-gray-300 p-3'>
                                        Kontak
                                    </th>
                                    <th className='border border-gray-300 p-3'>
                                        Aksi
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {pendingRegistration.map(
                                    (v: Registration, i: number) => (
                                        <tr key={i}>
                                            <td className='border border-gray-300 p-3'>
                                                {v.classroom}
                                            </td>
                                            <td className='border border-gray-300 p-3'>
                                                {v.classLeader}
                                            </td>
                                            <td className='border border-gray-300 p-3'>
                                                {v.nim}
                                            </td>
                                            <td className='border border-gray-300 p-3'>
                                                {v.contact}
                                            </td>
                                            <td className='border border-gray-300 p-3'>
                                                <button
                                                    className='cursor-pointer mx-2'
                                                    onClick={() => {
                                                        setSelectedIndex(i);
                                                    }}
                                                >
                                                    <CiRead size={30} />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    ) : (
                        <>
                            <h3 className='text-2xl font-semibold'>
                                Detail registrasi kelas{' '}
                                {pendingRegistration[selectedIndex].classroom}
                            </h3>
                            {detail.participant ? (
                                Object.keys(detail?.participant as object)?.map(
                                    (key) => (
                                        <div className='my-5'>
                                            <h4 className='text-lg mb-1 font-semibold'>
                                                {key}
                                            </h4>
                                            <table className='border-collapse border border-gray-400 w-full'>
                                                <thead>
                                                    <tr>
                                                        <th className='border border-gray-300 p-3'>
                                                            Nama
                                                        </th>
                                                        <th className='border border-gray-300 p-3'>
                                                            NIM
                                                        </th>
                                                        <th className='border border-gray-300 p-3'>
                                                            Kontak
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {(detail.participant as any)[key].map(
                                                        (
                                                            v: any,
                                                            i: number
                                                        ) => (
                                                            <tr key={i}>
                                                                <td className='border border-gray-300 p-3'>
                                                                    {
                                                                        v.name
                                                                    }
                                                                </td>
                                                                <td className='border border-gray-300 p-3'>
                                                                    {
                                                                        v.nim
                                                                    }
                                                                </td>
                                                                <td className='border border-gray-300 p-3'>
                                                                    {v.contact}
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    )
                                )
                            ) : (
                                <></>
                            )}
                            <div className='flex justify-end'>
                                <button className='bg-[#1c2434] text-[#dee4ee] px-3 py-2 rounded-md cursor-pointer'
                                onClick={() => setSelectedIndex(-1)}>
                                    Back
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
