export type Registration = {
    id: number,
    classroom: string, 
    classLeader: string,
    nim: string,
    contact: string,
    Participant: {
        id: number,
        registrationId: number,
        nama: string,
        nim: string,
        kontak: string,
        mataLomba: number,
        cabor: {
            mataLomba: string
        }
    }[]
}