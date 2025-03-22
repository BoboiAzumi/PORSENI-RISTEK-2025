export type Participant = {
    name: string,
    nim: string,
    contact: string
}

export type CompetitionGroup = {
    type: string,
    participant: Participant[]
}

export type Competition = {
    id: number, 
    name: string
}