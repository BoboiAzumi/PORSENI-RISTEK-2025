/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { Registration } from '../../types/admin';
import {
    CiCircleCheck,
    CiCircleRemove,
    CiRead,
    CiSquareRemove,
} from 'react-icons/ci';
import { Modal } from '../modal';
import { DetailRegistration } from '../../types/detail';

export function RegistrationTable() {
    const [pendingRegistration, setPendingRegistration] = useState(
        [] as Registration[]
    );
    const [detail, setDetail] = useState({} as DetailRegistration);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [selected, setSelected] = useState(0);
    const [modalApprove, setModalApprove] = useState(false);
    const [modalReject, setModalReject] = useState(false);

    function fetchData() {
        fetch('http://localhost:1000/api/registration/pending')
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

    async function reject() {
        setModalReject(false);
        const res = await fetch('http://localhost:1000/api/registration/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: pendingRegistration[selected].id,
                status: 'REJECT',
            }),
        });
        const json = await res.json();

        if (json != 'ERROR') {
            fetchData();
            return;
        }

        alert('Backend Error');
    }

    async function approve() {
        setModalApprove(false);
        const res = await fetch('http://localhost:1000/api/registration/', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: pendingRegistration[selected].id,
                status: 'APPROVED',
            }),
        });
        const json = await res.json();

        if (json != 'ERROR') {
            fetchData();
            return;
        }

        alert('Backend Error');
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
            <Modal
                className='bg-white p-5 rounded-md shadow-lg min-w-[30rem]'
                show={modalApprove}
                setShow={setModalApprove}
            >
                <>
                    <div className='w-full flex justify-between'>
                        <h3 className='text-xl font-semibold'>
                            Apakah anda yakin menyetujui formulir ini ?
                        </h3>
                        <button
                            className='cursor-pointer'
                            onClick={() => setModalApprove(!modalApprove)}
                        >
                            <CiSquareRemove size={30} />
                        </button>
                    </div>
                    <hr className='mt-3 h-[1px]' />
                    <div className='w-full flex justify-end mt-5 gap-2'>
                        <button
                            className='cursor-pointer bg-[#1c2434] text-white px-2 py-1 rounded-sm'
                            onClick={() => approve()}
                        >
                            Ya
                        </button>
                        <button
                            className='cursor-pointer bg-red-600 text-white px-2 py-1 rounded-sm'
                            onClick={() => setModalApprove(!modalApprove)}
                        >
                            Tidak
                        </button>
                    </div>
                </>
            </Modal>
            <Modal
                className='bg-white p-5 rounded-md shadow-lg min-w-[30rem]'
                show={modalReject}
                setShow={setModalReject}
            >
                <>
                    <div className='w-full flex justify-between'>
                        <h3 className='text-xl font-semibold'>
                            Apakah anda yakin menolak formulir ini ?
                        </h3>
                        <button
                            className='cursor-pointer'
                            onClick={() => setModalReject(!modalReject)}
                        >
                            <CiSquareRemove size={30} />
                        </button>
                    </div>
                    <hr className='mt-3 h-[1px]' />
                    <div className='w-full flex justify-end mt-5 gap-2'>
                        <button
                            className='cursor-pointer bg-[#1c2434] text-white px-2 py-1 rounded-sm'
                            onClick={() => reject()}
                        >
                            Ya
                        </button>
                        <button
                            className='cursor-pointer bg-red-600 text-white px-2 py-1 rounded-sm'
                            onClick={() => setModalReject(!modalReject)}
                        >
                            Tidak
                        </button>
                    </div>
                </>
            </Modal>
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
                                                <button className='cursor-pointer mx-2' 
                                                    onClick={() => {
                                                        setSelected(i);
                                                        setModalApprove(true);
                                                    }}>
                                                    <CiCircleCheck size={30} />
                                                </button>
                                                <button
                                                    className='cursor-pointer mx-2'
                                                    onClick={() => {
                                                        setSelected(i);
                                                        setModalReject(true);
                                                    }}
                                                >
                                                    <CiCircleRemove size={30} />
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
