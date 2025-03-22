import { useEffect, useState } from "react";
import { CiCircleCheck, CiServer } from "react-icons/ci";

export function Dashboard(){
    const [all, setAll] = useState(0)
    const [approved, setApproved] = useState(0)

    useEffect(() => {
        fetch("http://localhost:1000/api/registration/count")
        .then((res) => res.json())
        .then((json) => {
            if(json.status != "ERROR"){
                setAll(json.data.all)
                setApproved(json.data.approved)
            }
        })
    }, [])

    return (
        <div className="grid grid-cols-2 px-5 py-6 gap-5">
            <div className="bg-white shadow-sm p-5 rounded-md">
                <CiServer size={50} />
                <h2 className="text-2xl font-semibold mt-3 ml-1">{all}</h2>
                <h6 className="ml-1">Total All Registration</h6>
            </div>
            <div className="bg-white shadow-sm p-5 rounded-md">
                <CiCircleCheck size={50} />
                <h2 className="text-2xl font-semibold mt-3 ml-2">{approved}</h2>
                <h6 className="ml-2">Total Approved Registration</h6>
            </div>
        </div>
    )
}