/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { DetailRegistration } from '../types/detail';

export function Formulir() {
    const [searchParam] = useSearchParams();
    const id = searchParam.get('id');
    const [detail, setDetail] = useState({} as DetailRegistration);
    const [hasPrinted, setHasPrinted] = useState(false);

    async function fetchDetail() {
        fetch(`http://localhost:1000/api/registration/${id}`)
            .then((res) => res.json())
            .then((json) => {
                if (json.status != 'ERROR') {
                    setDetail(json.data);
                }
            });
    }

    useEffect(() => {
        fetchDetail();
    }, []);

    useEffect(() => {
        if (!detail.id) {
            return;
        }

        if (!hasPrinted) {
            window.print();
            setHasPrinted(true);
        }
    }, [detail]);

    function generateTanggal() {
        const date = new Date();
        
        const day = date.getDate().toString().padStart(2, '0');
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        
        return `${day}/${month < 10? "0"+month.toString() : month}/${year}`;
    }

    return (
        <div className='px-10 py-3'>
            <div className='w-full'>
                <h2 className='text-blue-500 text-xl text-center font-semibold'>
                    FORMULIR PENDAFTARAN ULANG PESERTA
                </h2>
                <h3 className='text-blue-500 text-md text-center font-bold mb-4'>
                    PORSENI RISTEK STIKOM TUNAS BANGSA 2025
                </h3>
            </div>
            <hr />
            <div className='w-full mt-8'>
                <h3 className='text-blue-500 text-md text-left font-bold'>
                    I. Informasi Tim/Kelas
                </h3>
                <div className='grid grid-cols-2 grid-flow-row-dense'>
                    <p>Nama Tim/Kelas</p>
                    <p>: {detail.classroom}</p>
                    <p>Komting</p>
                    <p>: {detail.classLeader}</p>
                    <p>NIM</p>
                    <p>: {detail.nim}</p>
                    <p>Kontak</p>
                    <p>: {detail.contact}</p>
                </div>
            </div>
            <div className='w-full mt-8'>
                <h3 className='text-blue-500 text-md text-left font-bold'>
                    II. Informasi Kontingen untuk masing masing perlombaan
                </h3>
                {detail.participant ? (
                    Object.keys(detail?.participant as object)?.map((key) => (
                        <div className='my-5'>
                            <h4 className='text-md mb-1 font-semibold'>
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
                                        (v: any, i: number) => (
                                            <tr key={i}>
                                                <td className='border border-gray-300 p-3'>
                                                    {v.name}
                                                </td>
                                                <td className='border border-gray-300 p-3'>
                                                    {v.nim}
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
                    ))
                ) : (
                    <></>
                )}
            </div>
            <div className='w-full mt-8'>
                <h3 className='text-blue-500 text-md text-left font-bold mb-2'>
                    III. Pernyataan dan Tanda Tangan
                </h3>
                <p>Saya yang bertanda tangan di bawah ini menyatakan bahwa seluruh informasi yang diberikan adalah benar. Saya dan/atau tim saya siap mematuhi 
                    semua aturan dan ketentuan yang berlaku dalam perlombaan PORSENI RISTEK STIKOM Tunas Bangsa</p>
                <div className='grid grid-cols-6 grid-flow-row-dense mt-5'>
                    <p>Nama</p>
                    <p>: {detail.classLeader}</p>
                </div>
                <div className='grid grid-cols-6 grid-flow-row-dense mt-20'>
                    <p>Tanda Tangan</p>
                    <p>:___________________________</p>
                </div>
                <div className='grid grid-cols-6 grid-flow-row-dense mt-2'>
                    <p>Tanggal</p>
                    <p className='w-full'>: {generateTanggal()}</p>
                </div>
            </div>
        </div>
    );
}
