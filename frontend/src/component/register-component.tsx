import { useEffect, useState } from 'react';
import { CompetitionGroup, Competition } from '../types/cabor';
import { Participant } from '../types/cabor';

export function RegisterComponent() {
    const [classroom, setClassroom] = useState('');
    const [classLeader, setClassLeader] = useState('');
    const [nim, setNim] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [competitionGroup, setCompetitionGroup] = useState([] as CompetitionGroup[]);
    const [competition, setCompetition] = useState([] as Competition[]);
    const [buttonLock, setButtonLock] = useState(false)

    useEffect(() => {
        setCompetitionGroup([]);
        fetch("http://localhost:1000/api/competition").then((res) => res.json())
        .then((json) => {
            if(json.status != "ERROR"){
                setCompetition(json.data)
            }
        })
    }, []);

    useEffect(() => {
        console.log(competition)
    }, [competition])

    async function submit(data: {classroom: string, classLeader: string, nim: string, contact: string, email: string, competitionGroup: CompetitionGroup[]}){
        setButtonLock(true)
        if(classroom == "" || classLeader == "" || nim == "" || contact == "" || email == ""){
            setButtonLock(false)
            alert("Tidak boleh ada yang kosong")
            return
        }

        const res = await fetch("http://localhost:1000/api/registration", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        if((await res.json()).status == "OK"){
            document.location.href = "/register"
        }
        setButtonLock(false)
    }

    return (
        <div className='min-h-[100vh] flex justify-center px-10 pb-10 py-[5rem] text-black'>
            <div className='bg-white px-[3rem] py-[4rem] rounded-md w-[60rem]'>
                <h3 className='text-2xl text-center font-semibold'>Daftar</h3>
                <form className='px-[3rem] py-[4rem]'>
                    <h4 className='my-1'>Kelas</h4>
                    <input
                        type='text'
                        placeholder='22S02'
                        value={classroom}
                        className='border-2 border-[#f3f5f7] px-[20px] py-[10px] rounded-md'
                        onChange={(ev) => setClassroom(ev.target.value)}
                    />
                    <h4 className='my-1'>Nama Komting</h4>
                    <input
                        type='text'
                        placeholder='Zaenal Abudin'
                        value={classLeader}
                        className='border-2 border-[#f3f5f7] px-[20px] py-[10px] rounded-md'
                        onChange={(ev) => setClassLeader(ev.target.value)}
                    />
                    <h4 className='my-1'>NIM Komting</h4>
                    <input
                        type='text'
                        placeholder='2202000'
                        value={nim}
                        className='border-2 border-[#f3f5f7] px-[20px] py-[10px] rounded-md'
                        onChange={(ev) => setNim(ev.target.value)}
                    />
                    <h4 className='my-1'>Kontak Komting</h4>
                    <input
                        type='text'
                        placeholder='087766554433'
                        value={contact}
                        className='border-2 border-[#f3f5f7] px-[20px] py-[10px] rounded-md'
                        onChange={(ev) => setContact(ev.target.value)}
                    />
                    <h4 className='my-1'>Email Komting</h4>
                    <input
                        type='text'
                        placeholder='antonwibowo@gmail.com'
                        value={email}
                        className='border-2 border-[#f3f5f7] px-[20px] py-[10px] rounded-md'
                        onChange={(ev) => setEmail(ev.target.value)}
                    />

                    <h3 className='mt-10 mb-5 text-xl font-semibold'>
                        Cabang Kompetisi
                    </h3>
                    {competitionGroup.map((v: CompetitionGroup, i: number) => (
                        <div className='p-5 rounded-md border-2 border-[#f3f5f7] w-full shadow-md'>
                            <select
                                value={v.type}
                                className='w-full px-4 py-2 border-[#f3f5f7] border-2'
                                onChange={(ev) => {
                                    const cab = [...competitionGroup];
                                    cab[i].type = ev.target.value;
                                    setCompetitionGroup(cab);
                                }}
                            >
                                <option value=''>Pilih</option>
                                {competition.map((va) => (
                                    <option value={va.id}>{va.name}</option>
                                ))}
                            </select>
                            <div className='grid grid-cols-3 grid-flow-row-dense mt-6'>
                                <h6>Nama</h6>
                                <h6>NIM</h6>
                                <h6>Kontak</h6>
                                {v.participant.map((p: Participant, j: number) => (
                                    <>
                                        <input
                                            type='text'
                                            className='border-2 border-[#f3f5f7] px-[20px] py-[10px] rounded-md'
                                            value={p.name}
                                            onChange={(ev) => {
                                                const cab = [...competitionGroup];
                                                cab[i].participant[j].name =
                                                    ev.target.value;
                                                setCompetitionGroup(cab);
                                            }}
                                        />
                                        <input
                                            type='text'
                                            className='border-2 border-[#f3f5f7] px-[20px] py-[10px] rounded-md'
                                            value={p.nim}
                                            onChange={(ev) => {
                                                const cab = [...competitionGroup];
                                                cab[i].participant[j].nim =
                                                    ev.target.value;
                                                setCompetitionGroup(cab);
                                            }}
                                        />
                                        <input
                                            type='text'
                                            className='border-2 border-[#f3f5f7] px-[20px] py-[10px] rounded-md'
                                            value={p.contact}
                                            onChange={(ev) => {
                                                const cab = [...competitionGroup];
                                                cab[i].participant[j].contact =
                                                    ev.target.value;
                                                setCompetitionGroup(cab);
                                            }}
                                        />
                                    </>
                                ))}
                            </div>
                            <button
                                type='button'
                                className='mt-4 w-full p-2 text-white bg-[#ec2e48] cursor-pointer rounded-md'
                                onClick={() => {
                                    const cab = [...competitionGroup];
                                    cab[i].participant.push({
                                        name: '',
                                        nim: '',
                                        contact: '',
                                    });
                                    setCompetitionGroup(cab);
                                }}
                            >
                                Tambah Peserta
                            </button>
                        </div>
                    ))}
                    <button
                        type='button'
                        className='mt-4 w-full p-2 text-white bg-[#ec2e48] cursor-pointer rounded-md'
                        onClick={() => {
                            setCompetitionGroup([
                                ...competitionGroup,
                                {
                                    type: '',
                                    participant: [],
                                } as CompetitionGroup,
                            ]);
                        }}
                    >
                        +
                    </button>
                    <div className='flex justify-end'>
                        <input
                            type='submit'
                            disabled={buttonLock}
                            value={buttonLock ? "Mengirim" : "Kirim"}
                            className='mt-5 p-2 text-white bg-[#ec2e48] cursor-pointer rounded-md'
                            onClick={(ev) => {
                                ev.preventDefault()
                                const data = {
                                    classroom,
                                    classLeader,
                                    nim,
                                    contact,
                                    email,
                                    competitionGroup
                                }
                                submit(data)
                            }}
                        />
                    </div>
                </form>
            </div>
        </div>
    );
}
