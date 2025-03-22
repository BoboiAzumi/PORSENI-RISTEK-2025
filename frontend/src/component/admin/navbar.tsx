export function NavbarAdmin({name}:{name: string}){
    return (
        <div className="w-full bg-white min-h-[3rem] shadow-sm flex items-center px-5 py-2 font-semibold">
            <h4>{name}</h4>
        </div>
    )
}